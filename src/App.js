import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Container from '@material-ui/core/Container'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Container>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={HomePage} />
            <Route path="/:country" component={CountryPage} />
          </div>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
