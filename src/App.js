import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

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

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Container>
      </HashRouter>
    );
  }
}

const Home = () => <div><Typography variant="h2" gutterBottom>Home</Typography></div>
const About = () => <div><h2>About</h2></div>

export default App;
