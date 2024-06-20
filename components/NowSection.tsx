import React from 'react';
import styles from '../styles/Now.module.scss';

type NowSectionProperties = {
  header: string;
  images?: React.ReactNode[];
  sections: React.ReactNode[];
};

function NowSection({ header, images, sections }: NowSectionProperties) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionHeader}>{header}</h3>
      <ul className={styles.sectionContent}>
        {sections.map((section, index) => (
          <li key={index} className={styles.sectionContentItem}>
            {section}
          </li>
        ))}
      </ul>
      {images && <div className={styles.familyImages}>{images}</div>}
    </section>
  );
}

export default NowSection;
