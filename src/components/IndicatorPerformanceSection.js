import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import Divider from './Divider'

const ColumnWithBGColor = styled(Grid)`
  background: ${props => props.background};
  color: white;
`

const ColumnWithoutPadding = styled(Grid)`
  @media (min-width: 960px) {
    padding-left: 0 !important;
  }
`

const ListWithSeparators = styled(List)`
  li:not(:last-child) {
    border-bottom: 1px solid #dbdbdb;
  }

  && .MuiListItem-secondaryAction {
    padding-right: 100px;
  }
`

const Color = styled.span`
  background-color: ${props => props.hex};
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 100%;
  border: 0;
  margin-left: 8px;
  vertical-align: middle;
`

const FullSizeImage = styled.img`
  && {
    left: 0;
    position: default;
    transform: none;
    max-width: 100%;
    display: block;
    margin: auto;
  }
`

class IndicatorPerformanceSection extends PureComponent {
  render() {
    const { city, focus, display } = this.props

    if(!display || !city)
      return null;

    const sdg = city.getSDG(focus)
    const { score } = sdg

    const indicators = sdg.indicators.map(indicator => {
      const { label } = indicator

      return (
        <ListItem key={label}>
          <ListItemText primary={label} />
          <ListItemSecondaryAction>
            <Typography variant='body1' display='inline' style={{color: '#6c757d'}}>
              {indicator.roundedScore()}
            </Typography>
            <Color hex={indicator.statusColor()} />
          </ListItemSecondaryAction>
        </ListItem>
      )
    })

    return(
      <Box marginBottom={2}>
        <Typography variant="h5" gutterBottom>
          Performance by indicator
        </Typography>
        <Divider />
        <Card>
          <CardContent style={{padding: 0}}>
            <Grid container spacing={3}>
              <ColumnWithBGColor
                item xs={12} md={3} lg={2}
                background={sdg.tileStatusColor()}>
                <FullSizeImage
                  src={`/images/sdg${focus}.png`}
                  alt={`SDG ${focus} icon`} />
                <Typography align='center' variant='body1'>
                  Score
                </Typography>
                <Typography align='center' variant='h4' gutterBottom>
                  {score}
                </Typography>
              </ColumnWithBGColor>
              <ColumnWithoutPadding item xs={12} md={9} lg={10}>
                <ListWithSeparators component="nav" style={{padding: 0}}>
                  <ListItem key='header'>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant='h6' style={{fontWeight: '400'}}>
                          {sdg.getLabel()}
                        </Typography>
                      }
                      secondary={
                        <Typography variant='body1' style={{color: '#6c757d'}}>
                          {score}
                        </Typography>
                      }>
                    </ListItemText>
                  </ListItem>
                  {indicators}
                </ListWithSeparators>
              </ColumnWithoutPadding>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default IndicatorPerformanceSection
