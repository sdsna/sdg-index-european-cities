import React, { PureComponent } from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import styled from 'styled-components'

const FullSizeImage = styled.img`
  && {
    left: 0;
    position: default;
    transform: none;
    width: 100%;
  }
`

class SDGTile extends PureComponent {
  render() {
    const { sdg, ...otherProps } = this.props

    return(
      <GridListTile cols={1} {...otherProps}>
        <FullSizeImage src={`/images/sdg${sdg}.png`} alt={`SDG ${sdg} icon`} className={`bg sdg${sdg}`} />
      </GridListTile>
    );
  }
}

export default SDGTile
