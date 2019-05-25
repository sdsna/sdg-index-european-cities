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
    const { sdgs, showTooltip, hideTooltip } = this.props

    const NUMBER_OF_GOALS = 15

    const blocks = sdgs.map((sdg) => {
      // width of block: max-width * score-in-percent
      // max width of block: 100/num-goals
      const blockWidth = 100/NUMBER_OF_GOALS * (Number(sdg.score)/100.0)
      return (
        <Block
          key={sdg.number}
          className={`sdg bg sdg${sdg.number}`}
          data-label={sdg.getLabel()}
          data-score={`${sdg.score}%`}
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
