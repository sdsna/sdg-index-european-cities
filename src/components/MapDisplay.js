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
    if(focus === null) {
      const score = city.score

      // find the correct HEX value for the score from color scheme
      const { colorSchemeOverallScore } = this.props
      const option = colorSchemeOverallScore.find(option => score > option.threshold)

      return option.hex || 'black'
    }
    else {
      // get the city's SDG
      const sdg = city.getSDG(focus)

      // find the correct HEX value for that color from colorSchemeGoals
      const { colorSchemeGoals } = this.props
      const option = colorSchemeGoals.find(option => option.color === sdg.status)

      return option.hex || 'black'
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
                        selector={`#${city.slug()}`}
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
