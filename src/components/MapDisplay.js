import React, { PureComponent } from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import styled from 'styled-components'

const MapSvg = styled(SvgLoader)`
  width: auto;
  height: auto;
  max-height: 70vh;
  max-width: 100%;

  padding-bottom: 20px;

  // center align
  display: block;
  margin: auto;

  #cities circle {
    transition: all .3s;
    cursor: pointer;
    stroke-width: 2;

    &:hover {
      stroke-width: 8;
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

  getCityStrokeColor(city, focus) {
    if(focus === null) {
      const score = city.score

      // find the correct HEX value for the score from color scheme
      const { colorSchemeOverallScore } = this.props
      const option = colorSchemeOverallScore.find(option => score > option.threshold)

      return option.mapStrokeColor || 'black'
    }
    else {
      const sdg = city.getSDG(focus)
      return sdg.mapStatusStrokeColor() || 'black'
    }
  }

  getCityColor(city, focus) {
    if(focus === null) {
      const score = city.score

      // find the correct HEX value for the score from color scheme
      const { colorSchemeOverallScore } = this.props
      const option = colorSchemeOverallScore.find(option => score > option.threshold)

      return option.mapColor || 'black'
    }
    else {
      const sdg = city.getSDG(focus)
      return sdg.mapStatusColor() || 'black'
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
    const { focus, cities, showTooltip, hideTooltip, openCityDashboard } = this.props

    const proxies = cities && cities.map(city => {
      return <SvgProxy  key={city.name.toLowerCase()}
                        selector={`#${city.slug()}`}
                        data-score={this.getCityScore(city, focus)}
                        data-label={this.getScoreLabel(city, focus)}
                        data-city={city.name}
                        data-url={city.url()}
                        onMouseOver={showTooltip}
                        onMouseOut={hideTooltip}
                        onClick={openCityDashboard}
                        fill={this.getCityColor(city, focus)}
                        stroke={this.getCityStrokeColor(city, focus)}
                        r='12'
                         />
    })

    return(
      <MapSvg path="/images/europe.svg">
        {proxies}
      </MapSvg>
    );
  }
}

export default MapDisplay
