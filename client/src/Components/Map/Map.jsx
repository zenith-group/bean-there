import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import KEYS from '/config.js'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: {}
    }
  }


  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEYS.google }}
          center={this.props.currentLocation}
          defaultCenter={{lat: 0, lng: 0}}
          defaultZoom={11}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;