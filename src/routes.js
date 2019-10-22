import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Mtg from './mtg';
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
      </Switch>
  );
}

export default Routes;
