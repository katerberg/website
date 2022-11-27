import React from 'react';
import styles from '../styles/WebDev.module.scss';

function WebDev() {
  return (
    <>
      <h1>{'Web Development'}</h1>
      <p>
        {
          'I constantly am working on random personal projects but very few of them come to fruition. Here are a few that seemed to have some promise:'
        }
      </p>
      <section>
        <article className={styles.application}>
          <a href="https://katerberg.github.io/superdark-7drl">
            <img
              alt="Super Dark starting screen"
              src="./applications/superdark.png"
            />
          </a>
          <main>
            <h2>{'Super Dark'}</h2>
            <h3>{'March 2022'}</h3>
            <p>
              {'A '}
              <a href="https://en.wikipedia.org/wiki/Roguelike">
                {'roguelike'}
              </a>
              {' that was built in only 7 days as a part of the '}
              <a href="https://itch.io/jam/7drl-challenge-2022">
                {'7DRL challenge'}
              </a>
              {' in a joint effort with '}
              <a href="https://www.linkedin.com/in/rob-rumble-5367488/">
                {'Rob Rumble'}
              </a>
              {'.'}
            </p>
            <a
              className={styles.applicationLink}
              href="https://katerberg.github.io/superdark-7drl"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/superdark-7drl"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="https://stlotus.org">
            <img
              alt="St Lotus Logo"
              src="https://stlotus.org/build/favicon-152.png"
            />
          </a>
          <main>
            <h2>{'St Lotus'}</h2>
            <h3>{'June 2021'}</h3>
            <p>
              {'The website for '}
              <a href="https://twitter.com/stlotusmtg">{'St Lotus'}</a>
              {', the St Louis Vintage Rotisserie Draft.'}
            </p>
            <a className={styles.applicationLink} href="https://stlotus.org">
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/st-lotus"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="https://katerberg.github.io/7drl/dist/index.html">
            <img alt="Start of the game" src="./applications/rogue.png" />
          </a>
          <main>
            <h2>{'7 Day Roguelike'}</h2>
            <h3>{'March 2020'}</h3>
            <p>
              {'A '}
              <a href="https://en.wikipedia.org/wiki/Roguelike">
                {'roguelike'}
              </a>
              {' that was built in only 7 days as a part of the '}
              <a href="https://itch.io/jam/7drl-challenge-2020">
                {'7DRL challenge'}
              </a>
              {'.'}
            </p>
            <a
              className={styles.applicationLink}
              href="https://katerberg.github.io/7drl/dist/index.html"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/7drl"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="https://twitch.tv/stlotusmtg">
            <img
              alt="Chat room with bot responding"
              src="./applications/stlotusmtg.png"
            />
          </a>
          <main>
            <h2>{'9th Seed'}</h2>
            <h3>{'May 2019'}</h3>
            <p>
              {'A '}
              <a href="https://twitch.tv">{'Twitch'}</a>
              {' chat bot to help with the '}
              <a href="https://twitter.com/stlotusmtg">
                {'St Louis Vintage Rotisserie Draft'}
              </a>
              {'.'}
            </p>
            <a
              className={styles.applicationLink}
              href="https://twitch.tv/stlotusmtg"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/9th-seed"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="https://www.npmjs.com/package/material-ui-confirm-button">
            <img
              alt="A button toggling between trash and confirm"
              src="./applications/confirm.gif"
            />
          </a>
          <main>
            <h2>{'Material UI Confirm Button'}</h2>
            <h3>{'August 2017'}</h3>
            <p>{'An inline confirm button in Material UI.'}</p>
            <a
              className={styles.applicationLink}
              href="https://www.npmjs.com/package/material-ui-confirm-button"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/material-ui-confirm-button"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="http://numblegame.com">
            <img
              alt="A grid of numbers with a score"
              src="./applications/numble.png"
            />
          </a>
          <main>
            <h2>{'Numble'}</h2>
            <h3>{'August 2016'}</h3>
            <p>
              {
                'A addictive arithmatic-based game that was written to try out Firebase.'
              }
            </p>
            <a className={styles.applicationLink} href="http://numblegame.com">
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/numble"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="http://neemandmarcus.com">
            <img
              alt="Two pixelated people looking lovingly at each other"
              src="./applications/katerwedding.png"
            />
          </a>
          <main>
            <h2>{'Wedding'}</h2>
            <h3>{'March 2016'}</h3>
            <p>
              {'A wedding website made for my beautiful wife '}
              <a href="http://neemserra.com">{'Neem Serra'}</a>
              {'.'}
            </p>
            <p>{'The password is WEDDING.'}</p>
            <a
              className={styles.applicationLink}
              href="http://neemandmarcus.com"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/katerwedding"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <img
            alt="A layout of spells with a modal over it with details"
            ng-click="goSpellbook()"
            src="./applications/pathfinder.png"
          />
          <main>
            <h2>{'Pathfinder Spellbook'}</h2>
            <h3>{'June 2015'}</h3>
            <p>
              {'Spellbook of '}
              <a href="https://en.wikipedia.org/wiki/Pathfinder_Roleplaying_Game">
                {'Pathfinder'}
              </a>
              {' spells from the core book to test out some CSS tricks.'}
            </p>
            <a
              className={styles.applicationLink}
              href="https://katerberg.github.io/pathfinder-spellbook"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/pathfinder-spellbook"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
        <article className={styles.application}>
          <a href="http://katerberg.github.io/minesweeper-angular-demo/app">
            <img
              alt="Traditional Minesweeper layout with a losing record"
              src="./applications/minesweeper.png"
            />
          </a>
          <main>
            <h2>{'Minesweeper'}</h2>
            <h3>{'June 2014'}</h3>
            <p>
              {'Clone of Windows 3.1 Minesweeper to practice TDD in AngularJS.'}
            </p>
            <a
              className={styles.applicationLink}
              href="https://katerberg.github.io/minesweeper-angular-demo"
            >
              {'Link to Application'}
            </a>
            <a
              className={styles.applicationLink}
              href="https://github.com/katerberg/minesweeper-angular-demo"
            >
              {'Link to Code'}
            </a>
          </main>
        </article>
      </section>
    </>
  );
}

export default WebDev;
