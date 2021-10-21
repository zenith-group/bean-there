import React from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviews, coffeeTypes }) => {
  return (
    <div className='reviews'>
      {reviews.map((review, index) => {
        return <Review review={review} key={index} coffeeTypes={coffeeTypes}/>;
      })}
    </div>
  );
};

export default ReviewsList;
