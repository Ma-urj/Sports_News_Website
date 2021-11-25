import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Single from './components/Single';
import Latest from './components/Latest';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/:sportname/:linkId">
            <Single />
          </Route>
          <Route path="/:sportname">
            <Links />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
