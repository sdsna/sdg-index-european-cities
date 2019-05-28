import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const FooterContainer = styled(Grid)`
  p, a {
    color: #6c757d;
  }

  a {
    font-weight: 500;

    &.logo {
      margin: auto;
      align-self: center;
    }
  }

  .MuiGrid-item, .MuiBox-root {
    width: 100%;
    display: flex;
  }
`

function Footer(props) {
  return (
    <FooterContainer container>
      <Grid item md={6} sm={12}>
        <Box padding={2}>
          <Typography variant='body2'>

            The data displayed in this dashboard is sourced from the
            {' '}
            <a href='https://www.sdgindex.org/news/2019/05/22/sdg-index-for-european-cities/' target='_blank' rel='noopener noreferrer'>
              SDG Index and Dashboards Report for European cities
            </a>
            . The report was prepared by the
            {' '}
            <a href="http://unsdsn.org/" target='_blank' rel='noopener noreferrer'>
              Sustainable Development Solutions Network
            </a>
            {' '}
            and the
            {' '}
            <a href="http://www.telos.nl/" target='_blank' rel='noopener noreferrer'>
              Brabant Center for Sustainable Development
            </a>
            .
            <br/><br/>
            This website is an
            {' '}
            <a href="https://github.com/sdsna/sdg-index-european-cities" target='_blank' rel='noopener noreferrer'>
              open source passion project
            </a>
            {' '}
            by
            {' '}
            <a href='https://twitter.com/FinnWoelm' target='_blank' rel='noopener noreferrer'>
              @FinnWoelm
            </a>
            {' '}
            in collaboration with the
            {' '}
            <a href='https://www.sdgindex.org/' target='_blank' rel='noopener noreferrer'>
              SDG Index
            </a>
            {' '}
            team. If you have
            comments, suggestions, or find an inaccuracy, please
            {' '}
            <a href='https://twitter.com/FinnWoelm' target='_blank' rel='noopener noreferrer'>
              send me a tweet
            </a>
            .
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Box padding={2}>
          <a className='logo' href="http://unsdsn.org/" target='_blank' rel='noopener noreferrer'>
            <img src='/images/SDSN-logo.png' alt='SDSN logo' style={{maxHeight: 60}}/>
          </a>
        </Box>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Box padding={2}>
          <a className='logo' href="http://www.telos.nl/" target='_blank' rel='noopener noreferrer'>
            <img src='/images/telos-logo.png' alt='Telos logo' style={{maxHeight: 60}}/>
          </a>
        </Box>
      </Grid>
    </FooterContainer>
  )
}

export default Footer
