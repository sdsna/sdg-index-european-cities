import React, { PureComponent } from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import styled from 'styled-components'

const MapSvg = styled(SvgLoader)`
  #cities circle {
    transition: all .3s;

    &:hover {
      stroke-width: 12;
    }
  }
`

class MapDisplay extends PureComponent {
  getCityScore(city, focus) {
    if(focus === null)
      return city.score.toString();
    else {
      const sdg = city.getSDG(focus)
      return sdg && sdg.score.toString()
    }
  }

  getCityColor(city, focus) {
    if(focus === null)
      return 'black'
    else {
      const sdg = city.getSDG(focus)
      switch(sdg.status) {
        case 'green':     return '#006c00'
        case 'yellow':    return '#ffea00'
        case 'orange':    return '#ff7500'
        case 'red':       return '#c90000'
        case 'gray':      return '#5a5a5a'
        default:          return 'black'
      }
    }
  }

  getScoreLabel(city, focus) {
    if(focus === null)
      return 'Overall Score'
    else {
      const sdg = city.getSDG(focus)
      return sdg && sdg.getLabel()
    }
  }

  render() {
    const { focus, cities, showTooltip, hideTooltip } = this.props

    const proxies = cities && cities.map(city => {
      return <SvgProxy  key={city.name.toLowerCase()}
                        selector={`#${city.name.toLowerCase()}`}
                        data-score={this.getCityScore(city, focus)}
                        data-label={this.getScoreLabel(city, focus)}
                        data-city={city.name}
                        onMouseOver={showTooltip}
                        onMouseOut={hideTooltip}
                        fill={this.getCityColor(city, focus)}
                        r='20'
                         />
    })

    return(
      <MapSvg path="/images/europe.svg" style={{width: '100%', height: 'auto'}}>
        {proxies}
      </MapSvg>
    );
  }
}

export default MapDisplay
