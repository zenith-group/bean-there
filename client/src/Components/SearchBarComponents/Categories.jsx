import React from 'react';
import Select from 'react-select';

const Categories = ({ categories, handleChange }) => {
  const options = categories.map((category) => {
    return { value: category, label: category };
  });
  return <Select isMulti onChange={handleChange} options={options} />;
};

export default Categories;
