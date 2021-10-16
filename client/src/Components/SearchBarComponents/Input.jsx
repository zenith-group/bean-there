import React from 'react';

const Input = ({ input, handleChange }) => {
  return <input type='text' value={input} onChange={handleChange} />;
};

export default Input;
