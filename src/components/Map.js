import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import SDG from '../models/SDG'
import MapLegend from './MapLegend'
import MapDisplay from './MapDisplay'

const colorSchemeGoals = SDG.colorScheme()

const colorSchemeOverallScore = [{
    colorName: 'green',
    mapColor: '#00c600',
    mapStrokeColor: '#1c8634',
    description: '> 70',
    threshold: 70
  },{
    colorName: 'light-green',
    mapColor: '#92e792',
    mapStrokeColor: '#4fbd4f',
    description: '65 - 70',
    threshold: 65
  },{
    colorName: 'lime',
    mapColor: '#d5ff00',
    mapStrokeColor: '#a2d400',
    description: '60- 65',
    threshold: 60
  },{
    colorName: 'yellow',
    mapColor: '#ffea00',
    mapStrokeColor: '#f2bc3c',
    description: '55 - 60',
    threshold: 55
  },{
    colorName: 'orange',
    mapColor: '#ff7500',
    mapStrokeColor: '#c35900',
    description: '50 - 55',
    threshold: 50
  },{
    colorName: 'red',
    mapColor: '#c90000',
    mapStrokeColor: '#710000',
    description: '< 50',
    threshold: 0
  }
]

const Tooltip = styled(Popper)`
  font-size: .8rem;
  border-radius: 5px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: absolute;
  pointer-events: none;
  z-index: 1000;

  .arrow:after {
    box-sizing: border-box;
    display: inline;
    font-size: 10px;
    width: 100%;
    line-height: 1;
    content: "▼";
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    text-align: center;
    left: 0;
    bottom: -7px;
  }
`

// Controls the map display
class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tooltipShow: false,
      tooltipAnchor: null,
      tooltipScore: null,
      tooltipLabel: null
    };
  }

  openCityDashboard = event => {
    const url = event.currentTarget.getAttribute('data-url')

    this.props.history.push(url)
  }

  showTooltip = event => {
    const { currentTarget } = event;

    this.setState(state => ({
      tooltipShow: true,
      tooltipAnchor: currentTarget,
      tooltipScore: currentTarget.getAttribute('data-score'),
      tooltipCity: currentTarget.getAttribute('data-city'),
      tooltipLabel: currentTarget.getAttribute('data-label')
    }));
  };

  hideTooltip = event => {
    this.setState(state => ({
      tooltipShow: false
    }));
  };

  render() {
    const { focus, cities } = this.props

    const { tooltipShow, tooltipAnchor, tooltipCity, tooltipLabel, tooltipScore } = this.state

    return(
      <Container style={{position: "sticky", top: 0}}>
        { /* TODO: Display legend on mobile devices via tooltip button */ }
        <Hidden smDown>
          <MapLegend
            title={focus ? SDG.getLabel(focus) : 'SDG Index Score'}
            colorScheme={focus ? colorSchemeGoals : colorSchemeOverallScore} />
        </Hidden>

        <MapDisplay
          openCityDashboard={this.openCityDashboard}
          showTooltip={this.showTooltip}
          hideTooltip={this.hideTooltip}
          {...{cities, focus, colorSchemeGoals, colorSchemeOverallScore}}
           />
        <Tooltip
          open={tooltipShow}
          anchorEl={tooltipAnchor}
          placement="top"
          transition
          modifiers={{
            flip: {
              // our arrow is always pointing down, so do not flip tooltip
              enabled: false
            },
            offset: {
              enabled: true,
              offset: '0, 10px'
            }
          }}>
          <Typography variant='body2' style={{fontWeight: 500}}>
            {tooltipCity}
          </Typography>
          <Typography variant='body2'>
            <span>
              {tooltipLabel}:&nbsp;
            </span>
            <span style={{fontWeight: 500}}>
              {tooltipScore}
            </span>
          </Typography>
          <Hidden smDown>
            <div className='arrow' />
          </Hidden>
        </Tooltip>
      </Container>
    );
  }
}

export default withRouter(Map)
