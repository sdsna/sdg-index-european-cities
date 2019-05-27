import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Legend = styled(Card)`
  && {
    position: absolute;
    top: 30px;
    right: 40px;
    vertical-align: middle;

    > div {
      padding: 16px;
    }
  }
`

const Color = styled.span`
  background-color: ${props => props.fill};
  width: 40px;
  height: 24px;
  display: inline-block;
  line-height: 1rem;
  height: 1rem;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  border: 2px solid ${props => props.stroke};
  margin-right: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  vertical-align: middle;
`

const Description = styled(Typography)`
  && {
    font-size: .8rem;
    color: rgb(108, 117, 125);
  }
`

class MapLegend extends PureComponent {
  render() {
    const { title, colorScheme } = this.props

    const items = colorScheme && colorScheme.map(option => {
      return (
        <div key={option.colorName}>
          <Color fill={option.mapColor} stroke={option.mapStrokeColor} />
          <Description variant='body1' component='span'>
            {option.description}
          </Description>
        </div>
      )
    })

    return(
      <Legend>
        <CardContent>
          <Typography variant='subtitle1'>
            {title}
          </Typography>
          {items}
        </CardContent>
      </Legend>
    );
  }
}

export default MapLegend
