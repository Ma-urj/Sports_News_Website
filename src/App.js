import React from 'react';
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Single from './components/Single';
import Latest from './components/Latest';
import Links from './components/Links';
import Menu from './components/Menu';
import Fixtures from './components/Fixtures';
import FBFix from './components/FBFix';
import ReDir from './components/ReDir';
import InChoice from './components/InChoice';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Container>
          <Switch>
            <Route path="/latest">
              <Latest />
            </Route>
            <Route path="/redir">
              <ReDir />
            </Route>
            <Route path="/:sportname/fixtures/:matchdate">
              <FBFix />
            </Route>
            <Route path="/:sportname/articles/:linkId">
              <Single />
            </Route>
            <Route path="/:sportname/articles">
              <Links />
            </Route>
            <Route path="/:sportname">
              <InChoice />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  margin-top: 70px;
`