import React from 'react';

const Input = ({ input, handleChange }) => {
  return (
    <input
      className='input-left'
      name='input'
      type='text'
      value={input}
      onChange={handleChange}
      placeholder='Search for store'
    />
  );
};

export default Input;
