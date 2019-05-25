import React, { PureComponent } from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import styled from 'styled-components'

const MapSvg = styled(SvgLoader)`
  #cities circle {
    transition: all .3s;
    stroke-width: 0;

    &:hover {
      stroke-width: 8;
    }
  }
`

class MapDisplay extends PureComponent {
  setCityColor(nodes) {
    const SCORE_COLORS = {
      "london": "green"
    }

    nodes.forEach(node => {
      node.setAttribute("fill", SCORE_COLORS[node.id] || 'black')
      node.setAttribute("stroke", SCORE_COLORS[node.id] || 'black')
    })
  }

  render() {
    const { showTooltip, hideTooltip } = this.props

    return(
      <MapSvg path="/images/europe.svg" style={{width: '100%', height: 'auto'}}>
        <SvgProxy selector="#cities circle"
                  onElementSelected={this.setCityColor}
                  onMouseOver={showTooltip}
                  onMouseOut={hideTooltip} />
      </MapSvg>
    );
  }
}

export default MapDisplay
