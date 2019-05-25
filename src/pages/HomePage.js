import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography'
import CityIndex from '../components/CityIndex'
import Popper from '@material-ui/core/Popper'
import styled from 'styled-components'

import getSDGLabel from '../helpers/getSDGLabel'

const Tooltip = styled(Popper)`
  font-size: .8rem;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 2px;
  position: absolute;
  pointer-events: none;
  z-index: 1000;
  transition: all .2s;

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

  &.hidden {
    visibility: hidden;
  }
`

class HomePage extends PureComponent {
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
      tooltipLabel: getSDGLabel(currentTarget.getAttribute('data-sdg'))
    }));
  };

  hideTooltip = event => {
    this.setState(state => ({
      tooltipShow: false
    }));
  };

  render() {
    const { tooltipShow, tooltipAnchor, tooltipLabel, tooltipScore } = this.state

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Sustainable Development Goals
        </Typography>
        <hr/>
        <Typography variant='body1'>
          Select one of the 15 SDGs to see it on the map.
        </Typography>

        <CityIndex showTooltip={this.showTooltip} hideTooltip={this.hideTooltip} />
        <Tooltip
          className={tooltipShow ? 'show' : 'hidden'}
          open={Boolean(tooltipAnchor)}
          keepMounted={true}
          anchorEl={tooltipAnchor}
          placement="top"
          modifiers={{
            offset: {
              enabled: true,
              offset: '0, 7px'
            }
          }}>
          <div><strong>{tooltipLabel}</strong>: {tooltipScore}</div>
        </Tooltip>
      </div>
    );
  }
}

export default HomePage
