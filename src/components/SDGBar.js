import React, { Component } from 'react'
import styled from 'styled-components'

const Block = styled.div`
  display: inline-block;
  background: black;
  border-right: 1px solid #fff;
  min-height: 24px;
  vertical-align: bottom;

  &.SDG1 {
    background: rgb(204,44,67);
  }
  &.SDG2 {
    background: rgb(211, 162 ,70 );
  }
  &.SDG3 {
    background: rgb(81, 148 ,71 );
  }
  &.SDG4 {
    background: rgb(175, 39, 56 );
  }
  &.SDG5 {
    background: rgb(211 ,69 ,58 );
  }
  &.SDG6 {
    background: rgb(73, 181 ,203 ) ;
  }
  &.SDG7 {
    background: rgb(238, 189, 64 ) ;
  }
  &.SDG8 {
    background: rgb(141, 36, 65 );
  }
  &.SDG9 {
    background: rgb(219, 104, 62 ) ;
  }
  &.SDG10 {
    background: rgb(197 ,36 ,96 );
  }
  &.SDG11 {
    background: rgb(232, 151, 68 ) ;
  }
  &.SDG12 {
    background: rgb(177 ,134, 58 ) ;
  }
  &.SDG13 {
    background: rgb(65, 119 ,68 );
  }
  &.SDG15 {
    background: rgb(100 ,167, 74 ) ;
  }
  &.SDG16 {
    background: rgb(31, 101 ,137 ) ;
  }
`

class SDGBar extends Component {
  render() {
    const { scores } = this.props

    const NUMBER_OF_GOALS = 15

    const bars = Object.keys(scores).map((sdg) => {
      const barWidth = 100/NUMBER_OF_GOALS * (Number(scores[sdg])/100.0)
      return <Block className={`sdg ${sdg}`} key={sdg} style={{width: `calc(${barWidth}% - 1px`}}> </Block>
    })

    return(
      <div style={{width:400, backgroundColor: '#eee'}}>
        {bars}
      </div>
    );
  }
}

export default SDGBar
