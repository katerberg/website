import fs from 'node:fs';
import path from 'node:path';

interface FeedEntry {
  title: string;
  link: string;
  id: string;
  published: Date;
  updated: Date;
  summary: string;
  content: string;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateAtomFeed(): string {
  const siteUrl = 'https://katerberg.net';
  const feedUrl = `${siteUrl}/feed.atom`;
  const authorName = 'Mark Katerberg';

  // Read the now.tsx file to extract the update date
  const nowPagePath = path.join(process.cwd(), 'pages', 'now.tsx');
  const nowPageContent = fs.readFileSync(nowPagePath, 'utf8');

  // Read the NowHistory component to extract historical dates
  const nowHistoryPath = path.join(
    process.cwd(),
    'components',
    'NowHistory.tsx'
  );
  const nowHistoryContent = fs.readFileSync(nowHistoryPath, 'utf8');

  // Extract all update dates from both files using the "Updated YYYY-MM-DD" pattern
  const datePattern = /Updated (\d{4}-\d{2}-\d{2})/g;
  const allDates = new Set<string>();

  // Extract dates from now.tsx
  let match;
  while ((match = datePattern.exec(nowPageContent)) !== null) {
    allDates.add(match[1]);
  }

  // Extract dates from NowHistory.tsx
  datePattern.lastIndex = 0; // Reset regex
  while ((match = datePattern.exec(nowHistoryContent)) !== null) {
    allDates.add(match[1]);
  }

  if (allDates.size === 0) {
    throw new Error(
      'Could not find any update dates in now.tsx or NowHistory.tsx'
    );
  }

  // Convert dates to Date objects and create entries (sort for deterministic output)
  const entries: FeedEntry[] = [...allDates]
    .sort()
    .map((dateString: string) => {
      const [year, month, day] = dateString.split('-').map(Number);
      const updatedDate = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
      return {
        title: 'What I am up to now',
        link: `${siteUrl}/now`,
        // Use date in ID to make each entry unique
        id: `${siteUrl}/now#${dateString}`,
        published: updatedDate,
        updated: updatedDate,
        summary:
          'An update on what I am currently up to - family, work, media consumption, games, creation, and things I am thinking about.',
        content: `<p>I've updated my <a href="${siteUrl}/now">now page</a> with the latest on what I'm up to.</p>`,
      };
    })
    // Sort by date, newest first
    .sort((a, b) => b.updated.getTime() - a.updated.getTime());

  // Generate the feed
  const feedUpdated = entries[0]?.updated || new Date();
  const feedUpdatedRFC3339 = feedUpdated.toISOString();

  let feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Mark Katerberg</title>
  <id>${siteUrl}</id>
  <link rel="alternate" href="${siteUrl}"/>
  <link rel="self" href="${feedUrl}"/>
  <updated>${feedUpdatedRFC3339}</updated>
  <author>
    <name>${authorName}</name>
  </author>
`;

  // Add entries
  for (const entry of entries) {
    const publishedRFC3339 = entry.published.toISOString();
    const updatedRFC3339 = entry.updated.toISOString();

    feed += `  <entry>
    <title>${escapeXml(entry.title)}</title>
    <link rel="alternate" type="text/html" href="${entry.link}"/>
    <id>${entry.id}</id>
    <published>${publishedRFC3339}</published>
    <updated>${updatedRFC3339}</updated>
    <summary type="html">${escapeXml(entry.summary)}</summary>
    <content type="html">${escapeXml(entry.content)}</content>
  </entry>
`;
  }

  feed += `</feed>`;

  return feed;
}

// Run the script when executed directly
if (
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('generate-feed.ts')
) {
  try {
    const feed = generateAtomFeed();
    const outputPath = path.join(process.cwd(), 'public', 'feed.atom');
    fs.writeFileSync(outputPath, feed, 'utf8');
    console.log(`✅ Feed generated successfully at ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating feed:', error);
    throw error;
  }
}

export { generateAtomFeed };
