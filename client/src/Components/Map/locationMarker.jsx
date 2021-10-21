import React,{useState} from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from "./styles.js";

const LocationMarker = ({store}) => {

  const classes = useStyles();

  const [display, setdisplay] = useState(false)

    if(display){
      return (
      <Paper elevation={3} className={classes.paper} onMouseLeave={e => setdisplay(false)}>
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
      )
    } else {
      return (
        <LocationOnOutlinedIcon color='red' fontSize='large' onMouseEnter={e => setdisplay(true)} />
      )
    }
}

export default LocationMarker