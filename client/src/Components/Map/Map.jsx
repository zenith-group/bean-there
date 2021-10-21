import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import KEYS from "/config.js";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

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
        defaultZoom={15}
      >
        {props.store?.map((store, x) => (
          <div
            className={classes.markerContainer}
            lat={store.coordinates.latitude}
            lng={store.coordinates.longitude}
            key={x}
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className={classes.typography}
                variant="subtitle2"
                gutterBottom
              >
                {store.name}
              </Typography>
              <img className={classes.pointer} src={store.image_url} />
              <Rating
                name="read-only"
                size="small"
                value={Number(store.rating)}
                readOnly
              />
            </Paper>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
