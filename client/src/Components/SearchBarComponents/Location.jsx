import React from 'react';

const Location = ({ location, handleChange }) => {
  return (
    <input
      name='location'
      type='text'
      value={location}
      onChange={handleChange}
      placeholder='Location'
    />
  );
};

export default Location;
