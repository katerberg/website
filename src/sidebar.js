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
        <Link className="list-group-item"
          to="/web-dev"
        >{'Web Development'}</Link>
      </div>
    </header>
  );
}

export default Sidebar;
