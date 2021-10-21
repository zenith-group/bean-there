import React from 'react';
import StarRatings from 'react-star-ratings';

const Review = ({ review, coffeeTypes }) => {
  let coffeeType = coffeeTypes[review.coffee_type + 1] || null;
  let date = review.date.split('T')[0];
  return (
    <div className='review-container'>
      <h3 className='drink-name'>Drink Name: {review.drink_name}</h3>
      <StarRatings
          rating={review.rating}
          starRatedColor='#bc005c'
          starDimension='20px'
          starSpacing='1px'
      />
      <h4 className='coffee-type'>Coffee Type: {coffeeType !== null ? coffeeType.name : 'N/a'}</h4>
      <h3 className='review-body'>{review.review_body}</h3>
      <h4 className='helpful'>Helpful: {review.helpful}</h4>
      <h5 className='username'>Anon</h5>
      <h6 className='date'>{date}</h6>
    </div>
  );
};

export default Review;
