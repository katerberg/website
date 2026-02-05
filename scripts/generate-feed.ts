import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface FeedEntry {
  title: string;
  link: string;
  id: string;
  published: Date;
  updated: Date;
  summary: string;
  content: string;
}

interface NowEntryFrontmatter {
  date: string;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Get HTML excerpt: first block or first ~400 chars of text, then strip to last complete tag. */
function excerptFromHtml(html: string, maxChars: number = 400): string {
  const stripped = html.replace(/\s+/g, ' ').trim();
  if (stripped.length <= maxChars) return stripped;
  const cut = stripped.slice(0, maxChars);
  const lastOpen = cut.lastIndexOf('<');
  const lastClose = cut.lastIndexOf('>');
  if (lastClose > lastOpen && lastClose < cut.length) {
    return cut.slice(0, lastClose + 1);
  }
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

function generateAtomFeed(): string {
  const siteUrl = 'https://katerberg.net';
  const feedUrl = `${siteUrl}/feed.atom`;
  const authorName = 'Mark Katerberg';

  const contentDir = path.join(process.cwd(), 'content', 'now');
  if (!fs.existsSync(contentDir)) {
    throw new Error(`Content directory not found: ${contentDir}`);
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const entries: FeedEntry[] = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    const frontmatter = data as NowEntryFrontmatter;
    const dateString = frontmatter?.date;
    if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      continue;
    }

    const [year, month, day] = dateString.split('-').map(Number);
    const updatedDate = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
    const htmlBody = marked.parse(content, { async: false }) as string;
    const excerpt = excerptFromHtml(htmlBody);
    const readMore = `<p>Read more at <a href="${siteUrl}/now#${dateString}">now page</a>.</p>`;

    entries.push({
      title: 'What I am up to now',
      link: `${siteUrl}/now#${dateString}`,
      id: `${siteUrl}/now#${dateString}`,
      published: updatedDate,
      updated: updatedDate,
      summary: excerpt,
      content: excerpt + readMore,
    });
  }

  if (entries.length === 0) {
    throw new Error('No valid now entries found in content/now/*.md');
  }

  entries.sort((a, b) => b.updated.getTime() - a.updated.getTime());

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
