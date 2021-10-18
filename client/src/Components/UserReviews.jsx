import React from 'react';

const UserReviews = ({ reviews }) => (
  <div id='user-review-container'>
    <h2>Account Activities</h2>
    {reviews.map((review, index) => {
      <div id='review-container' key={`reviews_${}`}>
        <h3 className='review.store_id'></h3>

      </div>
    })}
  </div>
)

export default UserReviews;