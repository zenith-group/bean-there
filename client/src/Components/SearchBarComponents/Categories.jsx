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
      className='select'
      isMulti
      onChange={handleChange}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        fontSize: '24px'
      })}
      placeholder='Select Coffee Type'
    />
  );
};

export default Categories;
