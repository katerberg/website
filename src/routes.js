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
          path="/mtg"
        >
          <Mtg />
        </Route>
        <Route exact
          path="/web-dev"
        >
          <WebDev />
        </Route>
        <Route
          path="/"
        >
          <AboutMe />
        </Route>
      </Switch>
  );
}

export default Routes;
