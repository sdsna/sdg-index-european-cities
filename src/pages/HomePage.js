import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import CityIndex from '../components/CityIndex'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Sustainable Development Goals
        </Typography>
        <hr/>
        <Typography variant='body1'>
          Select one of the 15 SDGs to see it on the map.
        </Typography>

        <CityIndex />
      </div>
    );
  }
}

export default HomePage
