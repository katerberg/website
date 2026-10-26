import { XMLParser } from 'fast-xml-parser';

// Build time only: Goodreads does not allow cross-origin requests, so the
// scheduled deploy keeps this fresh instead of a live browser fetch.
export const GOODREADS_PROFILE_URL =
  'https://www.goodreads.com/user/show/55606019';
const SHELF_URL = 'https://www.goodreads.com/review/list_rss/55606019';
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

async function getShelf(query: string): Promise<GoodreadsBook[]> {
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      const response = await fetch(`${SHELF_URL}?${query}`, {
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (response.ok) {
        const feed = parser.parse(await response.text());
        const items: RssItem[] = feed?.rss?.channel?.item ?? [];
        return items.map(toBook);
      }
    } catch {
      // Timed out or network error; try again
    }
  }
  return [];
}

/** Returns current and recent books; a shelf that can't be fetched is empty. */
export async function getGoodreadsBooks(): Promise<GoodreadsBooks> {
  const [currentlyReading, read] = await Promise.all([
    getShelf('shelf=currently-reading'),
    getShelf('shelf=read&sort=date_read&order=d'),
  ]);
  return { currentlyReading, recentlyRead: read.slice(0, READ_LIMIT) };
}
