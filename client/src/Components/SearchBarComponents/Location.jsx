import React,{useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';

const Location = ({ location, handleChange }) => {

  const [autocomplete, setAutoComplete] = useState(null)

  const onLoad = (autoC) => setAutoComplete(autoC)
  const onPlaceChange =  () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    console.log(lat, lng)
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
      <input
        name='location'
        type='text'
        value={location}
        onChange={handleChange}
        placeholder='Location'
      />
    </Autocomplete>
  );
};

export default Location;
