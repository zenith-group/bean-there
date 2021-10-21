import React,{useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';

const Location = ({ location, changeLocation }) => {
  const [autocomplete, setAutoComplete] = useState(null)
  const onLoad = (autoC) => setAutoComplete(autoC)
  const onPlaceChange =  () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    changeLocation(lat, lng)
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
      <input
        name='location'
        type='text'
        placeholder='Location'
      />
    </Autocomplete >
  );
};

export default Location;
