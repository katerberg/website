import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Sidebar from './sidebar';
import Mtg from './mtg';
import './App.scss';

function App() {
  return (
    <div id="wrapper" className="App">
     <Router>
      <Sidebar />
      <div class="container-fluid">
        <div class="view-frame">
          <Switch>
              <Route exact path="/">
                Home
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
              <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                  <img alt="Creative Commons License" style={{"border-width": 0}} src="images/cc.png" />
              </a>
              <p>
                  This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
              </p>
          </footer>
        </div>
     </Router>
    </div>
  );
}

export default App;
