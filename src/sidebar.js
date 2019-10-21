import React from 'react';
import './sidebar.scss';

function Sidebar() {
  return (
    <header className="sidebar">
      <div class="profile">
        <a href="./about-me">About Me</a>
      </div>
      <p>
        Obsessive Personality centering on:
      </p>
      <div class="list-group">
        <a class="list-group-item" href="./mtg">Magic: the Gathering</a>
        <a class="list-group-item" href="./linux">Linux</a>
        <a class="list-group-item" href="./web-dev">Web Development</a>
      </div>
    </header>
  );
}

export default Sidebar;
