import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Sidebar from './sidebar';
import Mtg from './mtg';
import './App.scss';

function App() {
  return (
    <div className="App"
      id="wrapper"
    >
      <Router>
        <Sidebar />
        <div className="container-fluid">
          <div className="view-frame">
            <Switch>
              <Route exact
                path="/"
              >
    {'Home'}
              </Route>
              <Route path="/about-me">
                <h1>{'About Me'}</h1>
              </Route>
              <Route path="/mtg">
                <Mtg />
              </Route>
            </Switch>
          </div>
          <footer>
            <a href="http://creativecommons.org/licenses/by-sa/4.0/"
              rel="license"
            >
              <img alt="Creative Commons License"
                src="images/cc.png"
                style={{'border-width': 0}}
              />
            </a>
            <p>{'This work is licensed under a '}<a href="http://creativecommons.org/licenses/by-sa/4.0/"
              rel="license"
                                                 >{'Creative Commons Attribution-ShareAlike 4.0 International License'}</a>{'.'}</p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
