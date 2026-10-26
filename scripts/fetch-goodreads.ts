import fs from 'node:fs';
import { fetchGoodreadsBooks, GOODREADS_FILE } from '../lib/getGoodreadsBooks';

async function main() {
  const { books, usedFallback } = await fetchGoodreadsBooks();
  fs.writeFileSync(GOODREADS_FILE, JSON.stringify(books, null, 2), 'utf8');
  const counts = `${books.currentlyReading.length} reading, ${books.recentlyRead.length} read`;
  if (usedFallback) {
    console.warn(
      `⚠️ Goodreads unreachable for a shelf; used deployed copy (${counts})`
    );
  } else {
    console.log(`✅ Goodreads books saved (${counts})`);
  }
}

main();
