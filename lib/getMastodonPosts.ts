import sanitizeHtml from 'sanitize-html';

// Used both at build time (getStaticProps) and in the browser for live refresh.
// The Mastodon API allows cross-origin requests and needs no token for public posts.
export const MASTODON_PROFILE_URL = 'https://mastodonapp.uk/@katerberg';
const STATUSES_URL =
  'https://mastodonapp.uk/api/v1/accounts/109303420019396839/statuses?limit=5&exclude_replies=true&exclude_reblogs=true';
const TIMEOUT_MS = 5000;

export interface MastodonMedia {
  id: string;
  type: 'image' | 'gifv' | 'video' | 'audio' | 'unknown';
  url: string;
  previewUrl: string;
  description: string;
}

export interface MastodonPost {
  id: string;
  url: string;
  createdAt: string;
  contentWarning: string;
  content: string;
  media: MastodonMedia[];
}

interface ApiMedia {
  id: string;
  type: MastodonMedia['type'];
  url: string;
  preview_url: string | null;
  description: string | null;
}

interface ApiStatus {
  id: string;
  url: string;
  created_at: string;
  spoiler_text: string;
  content: string;
  visibility: string;
  media_attachments: ApiMedia[];
}

function sanitize(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'br', 'a', 'span'],
    allowedAttributes: { a: ['href', 'rel', 'class'], span: ['class'] },
    allowedSchemes: ['https', 'http'],
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', {
        rel: 'nofollow noopener noreferrer',
      }),
    },
  });
}

/** Returns recent public posts, or an empty list if Mastodon is unreachable. */
export async function getMastodonPosts(): Promise<MastodonPost[]> {
  try {
    const response = await fetch(STATUSES_URL, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) {
      return [];
    }
    const statuses: ApiStatus[] = await response.json();
    return statuses
      .filter((status) => status.visibility === 'public')
      .map((status) => ({
        id: status.id,
        url: status.url,
        createdAt: status.created_at,
        contentWarning: status.spoiler_text,
        content: sanitize(status.content),
        media: status.media_attachments.map((media) => ({
          id: media.id,
          type: media.type,
          url: media.url,
          previewUrl: media.preview_url || media.url,
          description: media.description || '',
        })),
      }));
  } catch {
    return [];
  }
}
