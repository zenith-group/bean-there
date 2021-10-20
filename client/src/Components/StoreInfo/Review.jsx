import React from 'react';

const Review = ({ review }) => {
  return (
    <div className='review'>
      <div>{review.date}</div>
      <div>{review.user_id}</div>
      <div>{review.coffee_type}</div>
      <div>{review.review_body}</div>
      <div>{review.helpful}</div>
    </div>
  );
};

export default Review;
