import React from 'react';

function Mtg() {
  return (
    <div id="mtg">
      <h1>{'Magic: the Gathering'}</h1>
      <p>{'I used to play Magic semi-competitively. I now play casually. Here are the decks I still have that I enjoy playing:'}</p>

      <h2>{'Pauper'}</h2>
      <ul>
        <li><a href="http://tappedout.net/mtg-decks/03-08-16-dimir-teachings/">{'Dimir Teachings'}</a></li>
      </ul>
      <h2>{'Modern'}</h2>
      <ul>
        <li><a href="http://tappedout.net/mtg-decks/10-09-17-gifts-storm">{'Storm'}</a></li>
      </ul>
      <h2>{'Legacy'}</h2>
      <ul>
        <li><a href="https://tappedout.net/mtg-decks/meandeck-doomsday-2018-07-05-1">{'Doomsday'}</a></li>
        <li><a href="http://tappedout.net/mtg-decks/12-04-15-1-land-belcher/">{'1 Land Belcher'}</a></li>
      </ul>
      <h2>{'EDH/Commander'}</h2>
      <ul>
        <li><a href="http://tappedout.net/mtg-decks/land-edh-5-color/">{'5 Color Lands'}</a></li>
        <li><a href="http://tappedout.net/mtg-decks/phelddagrif-true-group-hug-edh/">{'Phelddagrif Group Hug'}</a></li>
        <li><a href="https://tappedout.net/mtg-decks/11-08-21-lazav-the-multifarious">{'Lazav Reanimator'}</a></li>
      </ul>
    </div>
  );
}

export default Mtg;
