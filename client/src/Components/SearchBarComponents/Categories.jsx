import React from 'react';
import Select from 'react-select';

const Categories = ({ categories, handleChange }) => {
  const options = categories.map((category) => {
    return {
      value: category.name,
      label: category.name,
      coffee_id: category.coffee_id,
    };
  });
  return (
    <Select
      className='dark-text select'
      isMulti
      onChange={handleChange}
      options={options}
    />
  );
};

export default Categories;
