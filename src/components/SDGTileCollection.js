import React, { Fragment, PureComponent } from 'react'
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import Typography from '@material-ui/core/Typography'
import withWidth from '@material-ui/core/withWidth'

import SDGTile from '../components/SDGTile'


class SDGTileCollection extends PureComponent {
  render() {
    const { resetMapFocus, setMapFocus,
            columnsMD, columnsSM, columnsXS,
            width, exclude, backgroundColor } = this.props

    let columns = null

    switch(width) {
      case 'xs':
        columns = columnsXS
        break
      case 'sm':
        columns = columnsSM
        break
      case 'md':
      case 'lg':
      case 'xl':
      default:
        columns = columnsMD
        break;
    }

    const goals1to17  = [...Array(17).keys()].map(goal => {
      return <SDGTile clickHandler={setMapFocus}
                      key={goal+1}
                      sdg={goal+1}
                      {...{backgroundColor}} />
      })
    const sdgTile     = <SDGTile clickHandler={resetMapFocus} key={18} sdg='18' />

    let tiles = goals1to17.concat([sdgTile])

    // remove unwanted tiles, such as goals 14 and 17
    // must be reverse-sorted so that we remove the biggest index first
    exclude.sort().reverse().forEach(tileToExclude => {
      tiles.splice(tileToExclude - 1, 1)
    })

    return(
      <Fragment>
        <GridList cols={columns} spacing={8} cellHeight='auto'>
          {tiles}
        </GridList>
        <Box paddingTop={1}>
          <Typography variant='caption'>
            Due to lack of data availability at the subnational level,
            SDG 14 (Life Below Water) and SDG 17 (Partnerships for the Goals)
            were not considered in the prototype report.
          </Typography>
        </Box>
      </Fragment>
    );
  }
}

export default withWidth()(SDGTileCollection)
