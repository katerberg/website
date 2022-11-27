import React from 'react';
import styles from '../styles/Now.module.scss';

function Now() {
  return (
    <>
      <h1>{'What I am up to now'}</h1>
      <p className={styles.lastUpdated}>{'Updated 2022-11-21'}</p>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h2>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            {
              'Neem is doing great, but none of us are sleeping well with all the life transitions. She is still doing iOS dev at Stitch Fix.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'Rory was born on June 19. Everything went great and we are learning to deal with a little less sleep.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'Logan is 3 (and a half according to him) and loving his time at Forsyth School.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'We are stopping at 2 kids, but cannot wait to go on adventures together. Next big one is Cancun in March.'
            }
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h2>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            {'I am doing front-end platform work at Stitch Fix.'}
          </li>
          <li className={styles.sectionContentItem}>
            {
              'My primary focus is on the design system, but I am playing with NextJS quite a bit too.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {'We are spending time on migrating to a monorepo using TurboRepo.'}
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h2>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            {
              'We are mostly keeping up on all the Marvel and Star Wars shows. Andor has been lagging a little, but we will catch up.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            <a href="https://www.imdb.com/title/tt1751634">{'The Sandman'}</a>
            {' was fascinating and a great adaptation of the book.'}
          </li>
          <li className={styles.sectionContentItem}>
            {
              'I have been posting all of my movie reviews on Mastodon. The one I think is a must-watch is '
            }
            <a href="https://www.imdb.com/title/tt0025748/">
              {'The Scarlet Pimpernel (1934).'}
            </a>
          </li>
          <li className={styles.sectionContentItem}>
            {
              'Tiktok and Youtube take up too much time in my life and I am actively working on replacing them with things like podcasts.'
            }
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{'🎲 Games'}</h2>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            <a href="https://stlotus.org">
              {'Vintage Rotisserie Draft at St Lotus'}
            </a>
            {
              ' has gotten bumped a few times due to my health, but is hopefully coming back in 2023.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            <a href="https://www.marvelsnap.com/">{'Marvel Snap'}</a>
            {
              ' has been dominating my phone gaming time. It is addictive and quick, with a good progression system.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'Board games haven’t been much of a focus recently, but I am probably going to spend some time on '
            }
            <a href="https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/">
              {'Marvel Champions LCG'}
            </a>
            {' as winter comes.'}
          </li>
          <li className={styles.sectionContentItem}>
            {
              'I got a PS5 and mostly use it to play Fortnite, but I was pretty excited to get the Spider-Gwen outfit.'
            }
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{'🖌 Creation'}</h2>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            {
              'Planning is already happening for the next 7 Day RogueLike. Very likely it will be out of zeitgeist by then, but a game where you run a social media company sounds like fun.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'My lack of SQL knowledge is really stalling some work I want to do on St Lotus card rankings.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'Logan and I have been building Legos together. We have completed a Saturn V rocket and the Space Shuttle Discovery. Also many Logan-designed cars that he loves.'
            }
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{'🧠 Thinking About'}</h2>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            {
              'What work success means to me. Moving up a career ladder or down in hours is no longer my goal at work, so figuring out what it is has been taking time.'
            }
          </li>
          <li className={styles.sectionContentItem}>
            {
              'How to raise children. I know a lot of my personal values, but finding what to pass on to my children and how takes a lot of thought and planning.'
            }
          </li>
        </ul>
      </section>
      <p>
        <a href="https://nownownow.com/about">
          {'This is a ”now page“, and you should make one too.'}
        </a>
      </p>
    </>
  );
}

export default Now;
