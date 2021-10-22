import React from 'react';
import StarRatings from 'react-star-ratings';

const Review = ({ review, coffeeTypes }) => {
  let coffeeType = coffeeTypes[review.coffee_type + 1] || null;
  let date = review.date.split('T')[0];
  return (
    <div className='column coffee-review'>
      <div className='row space-between'>
        <div className='start'>
          <span className='bold'>{review.drink_name}</span>
          <span className='light'> | </span>
          <span className='coffee-type italic'>
            {coffeeType !== null ? coffeeType.name : 'N/A'}
          </span>
        </div>
        <StarRatings
          rating={review.rating}
          starRatedColor='#bc005c'
          starDimension='20px'
          starSpacing='1px'
        />
      </div>
      <div className='coffee-review-body'>{review.review_body}</div>
      <div className='review-info row space-between'>
        <div className='row end'>
          <span className='helpful'>Helpful {review.helpful} </span>
          <span className='light'> | </span>
          <span> Report</span>
        </div>
        <div className='row end'>
          <span className='italic'>Anon </span>
          <span className='light'> | </span>
          <span> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
