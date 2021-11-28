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
        </Container>
      </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  margin-top: 70px;
`