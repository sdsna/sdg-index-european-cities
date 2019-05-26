import React, { PureComponent } from 'react'
import Container from '@material-ui/core/Container'
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import MapDisplay from './MapDisplay'

const Tooltip = styled(Popper)`
  font-size: .8rem;
  border-radius: 5px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: absolute;
  pointer-events: none;
  z-index: 1000;

  &:after {
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
        <MapDisplay
          cities={cities}
          focus={focus}
          showTooltip={this.showTooltip}
          hideTooltip={this.hideTooltip} />
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
        </Tooltip>
      </Container>
    );
  }
}

export default Map
