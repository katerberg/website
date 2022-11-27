import React from 'react';
import styles from '../styles/Sidebar.module.scss';
import Link from 'next/link';

function Sidebar() {
  return (
    <header className={styles.sidebar}>
      <div className={styles.profile}>
        <Link href="/">{'About Me'}</Link>
      </div>
      <p>{'Obsessive Personality centering on:'}</p>
      <div className={styles.listGroup}>
        <Link className={styles.listGroupItem} href="/now">
          {'Life'}
        </Link>
        <Link className={styles.listGroupItem} href="/mtg">
          {'Magic TCG'}
        </Link>
        <Link className={styles.listGroupItem} href="/web-dev">
          {'Web Dev'}
        </Link>
      </div>
    </header>
  );
}

export default Sidebar;
