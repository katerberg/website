import React from 'react';
import {Link} from "react-router-dom";
import './sidebar.scss';

function Sidebar() {
  return (
    <header className="sidebar">
      <div class="profile">
        <Link to="/about-me">About Me</Link>
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
