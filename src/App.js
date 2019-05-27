import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled, { createGlobalStyle } from 'styled-components'

import HomePage from './pages/HomePage'
import CityPage from './pages/CityPage'
import Map from './components/Map'
import Footer from './components/Footer'

import loadCities from './helpers/loadCities'

const SiteHeader = styled(AppBar)`
  && {
    box-shadow: 0 1px 12px -3px rgba(0,0,0,.1);
    background: white;
  }

  h6 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    background: #f8f9fa;
    margin: 0;
    padding: 0;
  }

  .bg {
    &.sdg1 {
      background: rgb(204,44,67);
    }
    &.sdg2 {
      background: rgb(211, 162 ,70 );
    }
    &.sdg3 {
      background: rgb(81, 148 ,71 );
    }
    &.sdg4 {
      background: rgb(175, 39, 56 );
    }
    &.sdg5 {
      background: rgb(211 ,69 ,58 );
    }
    &.sdg6 {
      background: rgb(73, 181 ,203 ) ;
    }
    &.sdg7 {
      background: rgb(238, 189, 64 ) ;
    }
    &.sdg8 {
      background: rgb(141, 36, 65 );
    }
    &.sdg9 {
      background: rgb(219, 104, 62 ) ;
    }
    &.sdg10 {
      background: rgb(197 ,36 ,96 );
    }
    &.sdg11 {
      background: rgb(232, 151, 68 ) ;
    }
    &.sdg12 {
      background: rgb(177 ,134, 58 ) ;
    }
    &.sdg13 {
      background: rgb(65, 119 ,68 );
    }
    &.sdg15 {
      background: rgb(100 ,167, 74 ) ;
    }
    &.sdg16 {
      background: rgb(31, 101 ,137 ) ;
    }
  }
`

const ToolbarButton = styled(ButtonBase)`
  && {
    text-align: left;
    padding: 16px;
    display: flex;
    align-self: stretch;
    flex-direction: column;
    align-items: start;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: [], focus: null };
  }

  componentDidMount() {
    loadCities(cities => {
      this.setState({ cities: cities })
    })
  }

  setMapFocus = event => {
    const { currentTarget } = event;
    const newFocus = currentTarget.getAttribute('data-focus')

    this.setState({ focus: newFocus })
  }

  resetMapFocus = event => {
    this.setState({ focus: null })
  }

  render() {
    const { focus, cities } = this.state

    return (
      <HashRouter basename="/">
        <SiteHeader position="static" color="default">
        <Container style={{padding: 0}}>
          <Toolbar>
            <ToolbarButton component={Link} to="/">
              <Typography variant="h6" color="inherit">
                European Cities SDG Index
              </Typography>
              <Typography variant="body1" style={{color: '#6c757d'}} gutterBottom>
                Prototype Version (2019)
              </Typography>
            </ToolbarButton>
            <Hidden xsDown>
              <div style={{flexGrow: 1}} />
              <ToolbarButton component='a' href="http://unsdsn.org/" target='_blank' rel='noopener noreferrer'>
                <img src='/images/SDSN-logo.png' alt='SDSN logo' style={{maxHeight: 60}}/>
              </ToolbarButton>
              <ToolbarButton component='a' href="http://www.telos.nl/" target='_blank' rel='noopener noreferrer'>
                <img src='/images/telos-logo.png' alt='Telos logo' style={{maxHeight: 60}}/>
              </ToolbarButton>
            </Hidden>
            </Toolbar>
          </Container>
        </SiteHeader>

        <Map
          focus={focus}
          cities={cities} />

        <Container style={{background: '#f8f9fa', position: 'relative'}}>
          <Route
            exact
            path="/"
            render={(props) => {
              return <HomePage
                        {...props}
                        focus={focus}
                        setMapFocus={this.setMapFocus}
                        resetMapFocus={this.resetMapFocus}
                        cities={cities} />
            }} />
          <Route
            path="/:city"
            render={(props) => {
              return <CityPage
                        {...props}
                        focus={focus}
                        setMapFocus={this.setMapFocus}
                        resetMapFocus={this.resetMapFocus}
                        cities={cities} />
            }} />

            <Footer />
        </Container>
        <GlobalStyle />
      </HashRouter>
    );
  }
}

export default App;
