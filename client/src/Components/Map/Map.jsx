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
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        location: { lat: latitude, lng: longitude }
      })
    })
  }


  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEYS.google }}
          center={this.state.location}
          defaultCenter={{lat: 0, lng: 0}}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;