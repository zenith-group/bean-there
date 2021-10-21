import React from 'react';

const UserReviews = ({ reviews }) => (
  <div id='user-review-container'>
    <h2>Account Activities</h2>
    {reviews.map((review, index) => (
      <div className='review-container' key={`reviews_${index}`}>
        <h3 className='store-id'>{review.store_id}</h3>
        <h4 className='drink-name'>{review.drink_name}</h4>
        <h4 className='rating'>{review.rating}</h4>
        <h5 className='review-body'>{review.review_body}</h5>
        <h4 className='date'>{review.date}</h4>
      </div>
    ))}
  </div>
)

export default UserReviews;