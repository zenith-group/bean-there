import React from 'react';

const Location = ({ location, handleChange }) => {
  return <input type='text' value={location} onChange={handleChange} />;
};

export default Location;
