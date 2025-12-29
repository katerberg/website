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

  // Extract the update date from the "Updated YYYY-MM-DD" pattern
  const dateMatch = nowPageContent.match(/Updated (\d{4}-\d{2}-\d{2})/);
  if (!dateMatch) {
    throw new Error('Could not find update date in now.tsx');
  }

  const updateDateString = dateMatch[1];
  const [year, month, day] = updateDateString.split('-').map(Number);
  const updatedDate = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));

  // Generate entries - for now, just the "now" page
  const entries: FeedEntry[] = [
    {
      title: 'What I am up to now',
      link: `${siteUrl}/now`,
      id: `${siteUrl}/now`,
      published: updatedDate,
      updated: updatedDate,
      summary:
        'An update on what I am currently up to - family, work, media consumption, games, creation, and things I am thinking about.',
      content: `<p>I've updated my <a href="${siteUrl}/now">now page</a> with the latest on what I'm up to.</p>`,
    },
  ];

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
