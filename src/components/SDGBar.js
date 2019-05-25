import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  width: 400px;
  background: #eee;
`

const Block = styled.div`
  display: inline-block;
  background: black;
  border-right: 1px solid #fff;
  min-height: 24px;
  vertical-align: bottom;
`

class SDGBar extends PureComponent {
  render() {
    const { scores, showTooltip, hideTooltip } = this.props

    const NUMBER_OF_GOALS = 15

    const blocks = Object.keys(scores).map((sdg) => {
      // width of block: max-width * score-in-percent
      // max width of block: 100/num-goals
      const blockWidth = 100/NUMBER_OF_GOALS * (Number(scores[sdg])/100.0)
      return (
        <Block
          key={sdg}
          className={`sdg bg ${sdg.toLowerCase()}`}
          data-sdg={sdg}
          data-score={`${scores[sdg]}%`}
          style={{width: `calc(${blockWidth}% - 1px`}}
          onMouseOver={showTooltip}
          onMouseOut={hideTooltip} />
      )
    })

    return(
      <Bar>
        {blocks}
      </Bar>
    );
  }
}

export default SDGBar
