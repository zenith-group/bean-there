import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import KEYS from '/config.js'

const Map = (props) => {
  console.log(props)

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '50%', display: 'flex' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEYS.google }}
          center={props.currentLocation}
          defaultCenter={{lat: 0, lng: 0}}
          defaultZoom={15}
          onChange ={(e) => {
            console.log(e)
          }}
        ></GoogleMapReact>
    </div>
  );
}

export default Map;