import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'espresso', label: 'Espresso' },
  { value: 'latte', label: 'Latte' },
  { value: 'cappuccino', label: 'Cappuccino' },
];

const Categories = ({ categories, handleChange }) => {
  return <Select isMulti onChange={handleChange} options={options} />;
};

export default Categories;
