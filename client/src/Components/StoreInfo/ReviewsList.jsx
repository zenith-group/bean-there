import React from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviews }) => {
  return (
    <li className='row'>
      {reviews.map((review) => {
        return <Review review={review} />;
      })}
    </li>
  );
};

export default ReviewsList;
