import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import KEYS from "/config.js";
import LocationMarker from './locationMarker'

import useStyles from "./styles.js";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  const classes = useStyles();

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "75vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEYS.google }}
        center={props.currentLocation}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={14}
      >
        {props.store?.map((store, x) => (
          <div
            className={classes.markerContainer}
            lat={store.coordinates.latitude}
            lng={store.coordinates.longitude}
            key={x}
            onClick={e => props.select(store)}
          >
            <LocationMarker store={store} key={x}/>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
