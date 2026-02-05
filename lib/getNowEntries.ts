import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export interface NowImage {
  alt: string;
  file: string;
}

export interface NowEntryFrontmatter {
  date: string;
  images?: NowImage[];
}

export interface NowEntry {
  date: string;
  content: string;
  frontmatter: NowEntryFrontmatter;
}

export function getNowEntries(): NowEntry[] {
  const contentDir = path.join(process.cwd(), 'content', 'now');
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const entries: NowEntry[] = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    const frontmatter = data as NowEntryFrontmatter;
    const date = frontmatter?.date;
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      continue;
    }
    entries.push({ date, content, frontmatter });
  }

  entries.sort((a, b) => b.date.localeCompare(a.date));
  return entries;
}
