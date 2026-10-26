import React, { useEffect, useState } from 'react';
import styles from '../styles/MastodonFeed.module.scss';
import {
  getMastodonPosts,
  MASTODON_PROFILE_URL,
} from '../lib/getMastodonPosts';
import type { MastodonMedia, MastodonPost } from '../lib/getMastodonPosts';

// Fixed locale and zone so the build-time HTML matches what the browser renders.
const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeZone: 'America/Chicago',
});

type MastodonFeedProperties = {
  initialPosts: MastodonPost[];
};

function Media({ media }: { media: MastodonMedia }) {
  if (media.type === 'gifv') {
    return (
      <video
        aria-label={media.description}
        autoPlay
        loop
        muted
        playsInline
        poster={media.previewUrl}
        src={media.url}
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element -- Remote images, static export
  return <img alt={media.description} src={media.previewUrl} />;
}

function Post({ post }: { post: MastodonPost }) {
  const body = (
    <>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {post.media.length > 0 ? (
        <div className={styles.media}>
          {post.media.map((media) => (
            <a href={post.url} key={media.id}>
              <Media media={media} />
            </a>
          ))}
        </div>
      ) : null}
    </>
  );

  return (
    <li className={styles.post}>
      {post.contentWarning ? (
        <details>
          <summary>{post.contentWarning}</summary>
          {body}
        </details>
      ) : (
        body
      )}
      <a className={styles.date} href={post.url}>
        {dateFormat.format(new Date(post.createdAt))}
      </a>
    </li>
  );
}

function MastodonFeed({ initialPosts }: MastodonFeedProperties) {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    getMastodonPosts().then((latest) => {
      if (latest.length > 0) {
        setPosts(latest);
      }
    });
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={styles.feed}>
      <h2>{'Recent Posts'}</h2>
      <div data-feed-scroll>
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
      <a href={MASTODON_PROFILE_URL}>{'More on Mastodon →'}</a>
    </section>
  );
}

export default MastodonFeed;
