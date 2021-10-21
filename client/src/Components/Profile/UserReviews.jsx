import React from 'react';
import StarRatings from 'react-star-ratings'

const UserReviews = ({ reviews }) => (
  <div id='user-review-container'>
    <h2>Account Activities</h2>
    {reviews.map((review, index) => (
      <div className='review-container' key={`reviews_${index}`}>
        <h3 className='store-id'>{review.store_id}</h3>
        <h4 className='drink-name'>{review.drink_name}</h4>
        <StarRatings
          rating={review.rating}
          starRatedColor='#bc005c'
          starDimension='15px'
          starSpacing='1px'
        />
        <h5 className='review-body'>{review.review_body}</h5>
        <h6 className='date'>{review.date.split('T')[0]}</h6>
      </div>
    ))}
  </div>
)

export default UserReviews;