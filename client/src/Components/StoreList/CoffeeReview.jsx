import React from 'react';
import StarRatings from 'react-star-ratings';

const CoffeeReview = ({ coffee }) => {
  return (
    <div className='coffee-rating row space-between'>
      <div>{coffee.type.value}</div>
      <StarRatings
        rating={coffee.average}
        starRatedColor='#007e5b'
        starDimension='15px'
        starSpacing='1px'
      />
    </div>
  );
};

export default CoffeeReview;
