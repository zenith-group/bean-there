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
    console.log(this.props.store)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEYS.google }}
          center={this.props.currentLocation}
          defaultCenter={{lat: 0, lng: 0}}
          defaultZoom={11}
        >
          {this.props.store.map((store, x) => (
            <div
              lat={store.coordinates.latitude}
              lng={store.coordinates.longitude}
              key={x}
            >
              <div style={{backgroundcolor: 'black', color: 'red'}}>
                {store.name}
              </div>
            </div>
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;