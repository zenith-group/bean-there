import React from 'react';

const UserReviews = ({ reviews }) => (
  <div id='user-review-container'>
    <h2>Account Activities</h2>
    {reviews.map((review, index) => {
      <div id='review-container' key={`reviews_${index}`}>
        <h3 className='store_id'>{review.store_id}</h3>
        <h4 className='coffee_type'>{review.coffee_type}</h4>
        <h4 className='rating'>{review.rating}</h4>
        <h5 className='review_body'>{review.body}</h5>
        <h4 className='date'>{review.date}</h4>
      </div>
    })}
  </div>
)

export default UserReviews;