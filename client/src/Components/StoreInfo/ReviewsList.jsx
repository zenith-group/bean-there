import React from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviews }) => {
  return (
    <li className='row review-list'>
      {reviews.map((review) => {
        return <Review review={review} />;
      })}
    </li>
  );
};

export default ReviewsList;
