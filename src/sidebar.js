import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.scss';

function Sidebar() {
  return (
    <header className="sidebar">
      <div className="profile">
        <Link to="/about-me">{'About Me'}</Link>
      </div>
      <p>
    {'Obsessive Personality centering on:'}
      </p>
      <div className="list-group">
        <Link className="list-group-item"
          to="/mtg"
        >{'Magic: the Gathering'}</Link>
        <a className="list-group-item"
          href="./linux"
        >{'Linux'}</a>
        <a className="list-group-item"
          href="./web-dev"
        >{'Web Development'}</a>
      </div>
    </header>
  );
}

export default Sidebar;
