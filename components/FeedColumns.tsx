import React, { useEffect, useRef } from 'react';
import styles from '../styles/FeedColumns.module.scss';

const DESKTOP_QUERY = '(min-width: 1000px)';
const SCROLL_SELECTOR = '[data-feed-scroll]';

// Each feed's natural height, even while it is clipped to the shared height.
function naturalHeight(section: HTMLElement): number {
  const scroll = section.querySelector<HTMLElement>(SCROLL_SELECTOR);
  if (!scroll) {
    return section.offsetHeight;
  }
  return section.offsetHeight - scroll.clientHeight + scroll.scrollHeight;
}

/**
 * Lays feeds out in columns on desktop, sized to the shortest one so the
 * longer feed scrolls and the "More on…" links line up at the bottom.
 */
function FeedColumns({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) {
      return;
    }
    const desktop = window.matchMedia(DESKTOP_QUERY);

    const measure = () => {
      const sections = [...container.querySelectorAll<HTMLElement>('section')];
      if (!desktop.matches || sections.length < 2) {
        container.style.removeProperty('--feed-height');
        return;
      }
      const height = Math.ceil(Math.min(...sections.map(naturalHeight)));
      container.style.setProperty('--feed-height', `${height}px`);
    };

    // Content changes size as images load, columns resize, or Mastodon refreshes.
    const resizeObserver = new ResizeObserver(measure);
    const observeContent = () => {
      resizeObserver.disconnect();
      container
        .querySelectorAll(`${SCROLL_SELECTOR} > *`)
        .forEach((element) => resizeObserver.observe(element));
      measure();
    };
    const mutationObserver = new MutationObserver(observeContent);
    mutationObserver.observe(container, { childList: true, subtree: true });
    desktop.addEventListener('change', measure);
    observeContent();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      desktop.removeEventListener('change', measure);
    };
  }, []);

  return (
    <div className={styles.feeds} ref={ref}>
      {children}
    </div>
  );
}

export default FeedColumns;
