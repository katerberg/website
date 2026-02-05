import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { GetStaticProps } from 'next';
import styles from '../styles/Now.module.scss';
import { getNowEntries } from '../lib/getNowEntries';
import type { NowEntry } from '../lib/getNowEntries';

interface NowPageProps {
  entries: NowEntry[];
}

export const getStaticProps: GetStaticProps<NowPageProps> = () => {
  const entries = getNowEntries();
  return { props: { entries } };
};

function NowEntryBlock({
  entry,
  isHistory,
}: {
  entry: NowEntry;
  isHistory: boolean;
}) {
  const components = {
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className={styles.sectionHeader} {...props}>
        {children}
      </h3>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={styles.sectionContent} {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className={styles.sectionContentItem} {...props}>
        {children}
      </li>
    ),
    img: ({
      alt,
      src,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        alt={alt || ''}
        className={styles.nowMarkdownImage}
        src={src}
        {...props}
      />
    ),
  };

  return (
    <div id={entry.date}>
      <p className={styles.lastUpdated}>{`Updated ${entry.date}`}</p>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {entry.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function Now({ entries }: NowPageProps) {
  const current = entries[0];
  const history = entries.slice(1);

  return (
    <>
      <h1>{'What I am up to now'}</h1>
      <p>
        <a href="https://nownownow.com/about">
          {'This is a "now page", and you should make one too.'}
        </a>
      </p>
      {current ? <NowEntryBlock entry={current} isHistory={false} /> : null}
      {history.length > 0 ? (
        <>
          <hr />
          <h2>{'History'}</h2>
          <div className={styles.history}>
            {history.map((entry) => (
              <NowEntryBlock key={entry.date} entry={entry} isHistory />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export default Now;
