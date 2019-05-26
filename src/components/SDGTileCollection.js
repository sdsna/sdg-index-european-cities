import React, { PureComponent } from 'react'
import GridList from '@material-ui/core/GridList'

import SDGTile from '../components/SDGTile'


class SDGTileCollection extends PureComponent {
  render() {
    const { resetMapFocus, setMapFocus, columns, exclude, backgroundColor } = this.props

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
      <GridList cols={columns} spacing={8} cellHeight='auto'>
        {tiles}
      </GridList>
    );
  }
}

export default SDGTileCollection
