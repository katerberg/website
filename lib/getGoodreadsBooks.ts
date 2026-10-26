import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';

// Build time only: Goodreads does not allow cross-origin requests, so the
// scheduled deploy keeps this fresh instead of a live browser fetch.
const SHELF_URL = 'https://www.goodreads.com/review/list_rss/55606019';
// The last deployed copy, used for any shelf Goodreads fails to return
const PRODUCTION_COPY_URL = 'https://katerberg.net/goodreads.json';
export const GOODREADS_FILE = path.join(
  process.cwd(),
  'public',
  'goodreads.json'
);
const READ_LIMIT = 5;
// Generous because nobody waits on a build, and Goodreads is sometimes slow
const TIMEOUT_MS = 15000;
const ATTEMPTS = 2;

export interface GoodreadsBook {
  id: string;
  title: string;
  author: string;
  url: string;
  coverUrl: string;
  rating: number;
  readAt: string | null;
}

export interface GoodreadsBooks {
  currentlyReading: GoodreadsBook[];
  recentlyRead: GoodreadsBook[];
}

const NO_BOOKS: GoodreadsBooks = { currentlyReading: [], recentlyRead: [] };

interface RssItem {
  title: string;
  link: string;
  book_id: string;
  book_medium_image_url: string;
  author_name: string;
  user_rating: string;
  user_read_at: string;
}

const parser = new XMLParser({
  parseTagValue: false,
  isArray: (name) => name === 'item',
});

function toBook(item: RssItem): GoodreadsBook {
  const readAt = item.user_read_at ? new Date(item.user_read_at) : null;
  return {
    id: item.book_id,
    title: item.title,
    author: item.author_name.replace(/\s+/g, ' '),
    url: item.link,
    coverUrl: item.book_medium_image_url,
    rating: Number(item.user_rating) || 0,
    readAt: readAt && !isNaN(readAt.valueOf()) ? readAt.toISOString() : null,
  };
}

/** Returns the shelf's books, or null if Goodreads couldn't be reached. */
async function getShelf(query: string): Promise<GoodreadsBook[] | null> {
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      const response = await fetch(`${SHELF_URL}?${query}`, {
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (response.ok) {
        const feed = parser.parse(await response.text());
        if (feed?.rss?.channel) {
          const items: RssItem[] = feed.rss.channel.item ?? [];
          return items.map(toBook);
        }
      }
    } catch {
      // Timed out or network error; try again
    }
  }
  return null;
}

async function getProductionCopy(): Promise<GoodreadsBooks> {
  try {
    const response = await fetch(PRODUCTION_COPY_URL, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (response.ok) {
      const books: GoodreadsBooks = await response.json();
      if (
        Array.isArray(books.currentlyReading) &&
        Array.isArray(books.recentlyRead)
      ) {
        return books;
      }
    }
  } catch {
    // No usable copy; fall through
  }
  return NO_BOOKS;
}

/** Fetches both shelves, falling back to the deployed copy for any that fail. */
export async function fetchGoodreadsBooks(): Promise<{
  books: GoodreadsBooks;
  usedFallback: boolean;
}> {
  const [currentlyReading, read] = await Promise.all([
    getShelf('shelf=currently-reading'),
    getShelf('shelf=read&sort=date_read&order=d'),
  ]);
  if (currentlyReading && read) {
    return {
      books: { currentlyReading, recentlyRead: read.slice(0, READ_LIMIT) },
      usedFallback: false,
    };
  }
  const fallback = await getProductionCopy();
  return {
    books: {
      currentlyReading: currentlyReading ?? fallback.currentlyReading,
      recentlyRead: read ? read.slice(0, READ_LIMIT) : fallback.recentlyRead,
    },
    usedFallback: true,
  };
}

/** Reads the books written by scripts/fetch-goodreads.ts. */
export function readGoodreadsBooks(): GoodreadsBooks {
  try {
    return JSON.parse(fs.readFileSync(GOODREADS_FILE, 'utf8'));
  } catch {
    return NO_BOOKS;
  }
}
