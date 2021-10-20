import React from 'react';
import StarRatings from 'react-star-ratings';

const CoffeeReview = ({ coffee }) => {
  return (
    <div className='row'>
      <div>{coffee.value}</div>
      <StarRatings
        rating={0}
        starRatedColor='#007e5b'
        starDimension='15px'
        starSpacing='1px'
      />
    </div>
  );
};

export default CoffeeReview;
