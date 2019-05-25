import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import GridList from '@material-ui/core/GridList';
import Box from '@material-ui/core/Box';
import styled from 'styled-components'

import CityIndex from '../components/CityIndex'
import SDGTile from '../components/SDGTile'

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
      tooltipLabel: currentTarget.getAttribute('data-label')
    }));
  };

  hideTooltip = event => {
    this.setState(state => ({
      tooltipShow: false
    }));
  };

  render() {
    const { cities } = this.props

    const { tooltipShow, tooltipAnchor, tooltipLabel, tooltipScore } = this.state

    const goals1to13  = [...Array(13).keys()].map(goal => <SDGTile key={goal+1} sdg={goal+1} />)
    const goals15to16 = [...Array(2).keys()].map(goal => <SDGTile key={goal+15} sdg={goal+15} />)
    const sdgTile     = <SDGTile key={18} sdg='18' />

    const tiles = goals1to13.concat(goals15to16, sdgTile)

    return (
      <Paper style={{padding: 24, position: 'relative'}}>
        <Box marginBottom={5}>
          <Typography variant="h5" gutterBottom>
            Sustainable Development Goals
          </Typography>
          <Typography variant='body1' style={{color: '#6c757d'}} gutterBottom>
            Select one of the 15 SDGs to see it on the map.
          </Typography>
          <GridList cols={8} spacing={8} cellHeight='auto'>
            {tiles}
          </GridList>
        </Box>

        <CityIndex
          cities={cities}
          showTooltip={this.showTooltip}
          hideTooltip={this.hideTooltip} />
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
          <Typography variant='body2' paragraph={false}>
            <span style={{fontWeight: 500}}>
              {tooltipLabel}
            </span>: {tooltipScore}
          </Typography>
        </Tooltip>
      </Paper>
    );
  }
}

export default HomePage
