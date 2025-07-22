import React, { SyntheticEvent, useCallback } from 'react';

function Mtg() {
  const moxfieldInit = useCallback(
    (event: SyntheticEvent<HTMLIFrameElement, Event>) => {
      // eslint-disable-next-line no-undef -- Moxfield is global
      setTimeout(() => moxfieldOnLoad(event), 10);
    },
    []
  );

  return (
    <>
      <h1>{'Magic: the Gathering'}</h1>
      <p>
        {
          'I used to play Magic semi-competitively. I now play casually. Here are the decks I still have that I enjoy playing:'
        }
      </p>
      <h2>{'Legacy'}</h2>
      <ul>
        <li>
          <a href="https://www.moxfield.com/decks/ufydTUHb1ka9S1zYD-78Gw">
            {'Doomsday'}
          </a>
          <iframe
            id="legacy-doomsday"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/ufydTUHb1ka9S1zYD-78Gw"
            width="100%"
          />
        </li>
      </ul>
      <h2>{'EDH/Commander'}</h2>
      <ul>
        <li>
          <a href="http://tappedout.net/mtg-decks/land-edh-5-color/">
            {'5 Color Lands'}
          </a>
          <iframe
            id="edh-lands"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/HAWXT6-JmUKNcdsWu9Ebxg"
            width="100%"
          />
        </li>
        <li>
          <a href="https://www.moxfield.com/decks/Bk3ZF7TC1kGOY_lBZzc3LA">
            {'Phelddagrif Group Hug'}
          </a>
          <iframe
            id="edh-phelddagrif"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/Bk3ZF7TC1kGOY_lBZzc3LA"
            width="100%"
          />
        </li>
        <li>
          <a href="https://moxfield.com/decks/UAjhAJv_oEyFVyffgrcmMA">
            {'Sauron, the Dark Lord'}
          </a>
          <iframe
            id="sauron-the-dark-lord"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/UAjhAJv_oEyFVyffgrcmMA"
            width="100%"
          />
        </li>
        <li>
          <a href="https://www.moxfield.com/decks/HUC4WcumRka3EHcKHAivvg">
            {'Glissa Recursion'}
          </a>
          <iframe
            id="edh-phelddagrif"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/HUC4WcumRka3EHcKHAivvg"
            width="100%"
          />
        </li>
        <li>
          <a href="https://moxfield.com/decks/q-ohXhoWr0-EG2F8vOZCSw">
            {'Massacre Girl, Known Killer'}
          </a>
          <iframe
            id="massacre-girl"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/q-ohXhoWr0-EG2F8vOZCSw"
            width="100%"
          />
        </li>
      </ul>
      <h2>{'Modern'}</h2>
      <ul>
        <li>
          <a href="https://www.moxfield.com/decks/2NvM2kjEYEW7JD0-XaxqMg">
            {'Storm'}
          </a>
          <iframe
            id="modern-storm"
            style={{ border: 'none' }}
            onLoad={moxfieldInit}
            src="https://www.moxfield.com/embed/2NvM2kjEYEW7JD0-XaxqMg"
            width="100%"
          />
        </li>
      </ul>
      <h2>{'Cubes'}</h2>
      <ul>
        <li>
          <a href="https://cubecobra.com/cube/list/61c0cf61ee4126240637305e?view=table&scale=medium">
            {'Battle Box'}
          </a>
        </li>
        <li>
          <a href="https://cubecobra.com/cube/overview/2txn5">
            {'Pauper Cube'}
          </a>
        </li>
      </ul>
    </>
  );
}

export default Mtg;
