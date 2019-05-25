import React, { PureComponent } from 'react'
import Container from '@material-ui/core/Container'
import { SvgLoader, SvgProxy } from 'react-svgmt';

class Map extends PureComponent {
  render() {
    return(
      <Container>
        <SvgLoader path="/images/europe.svg" style={{width: '100%', height: 'auto'}}>
          <SvgProxy selector="#cities" onClick={function(event) { console.log(event.target.id); }} />
        </SvgLoader>
      </Container>
    );
  }
}

export default Map
