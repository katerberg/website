import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Mtg from './mtg';
import WebDev from './web-dev';
import AboutMe from './about-me';

function Routes() {
  return (
      <Switch>
        <Route exact
          path="/"
        >
          {'Home'}
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/mtg">
          <Mtg />
        </Route>
        <Route path="/web-dev">
          <WebDev />
        </Route>
      </Switch>
  );
}

export default Routes;
