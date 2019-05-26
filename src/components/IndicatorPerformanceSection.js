import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

import Divider from './Divider'


class IndicatorPerformanceSection extends PureComponent {
  render() {
    const { display } = this.props

    if(!display)
      return null;

    return(
      <Box marginBottom={2}>
        <Typography variant="h5" gutterBottom>
          Performance by indicator
        </Typography>
        <Divider />
      </Box>
    );
  }
}

export default IndicatorPerformanceSection
