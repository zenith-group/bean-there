import React from 'react';
import StarRatings from 'react-star-ratings';
import CoffeeReview from './CoffeeReview.jsx';
import Review from '../Review/Review.jsx';

const StoreTile = ({
  store,
  select,
  selectedCoffees,
  currentUserId,
  allCoffeeType,
  loggedin,
  storeRatings,
  coffeeRatings,
}) => {
  const handleClick = () => {
    select(store);
  };
  const averageReviews = (reviews) => {
    if (reviews === undefined) {
      return 0;
    }
    if (reviews.length === 0) {
      return 0;
    }
    let ratings = reviews.map((review) => {
      return review.rating;
    });
    let sum = ratings.reduce((prev, current) => prev + current);
    return sum / ratings.length;
  };

  const calculateStoreRatings = (store) => {
    if (!store) {
      return 0;
    }
    return averageReviews(store.reviews);
  };

  const coffeeRatingsByType = (store, searchCoffees) => {
    let coffeeReviews = [];
    if (!store) {
      return null;
    }
    searchCoffees.forEach((coffee) => {
      let reviewsByCoffeeType = store.reviews.filter((review) => {
        return review.coffee_type === coffee.coffee_id;
      });
      let averageByCoffeeType = averageReviews(reviewsByCoffeeType);
      let coffeeType = {
        type: coffee,
        reviews: reviewsByCoffeeType,
        average: averageByCoffeeType,
      };
      coffeeReviews.push(coffeeType);
    });
    return coffeeReviews;
  };
  let address = null;
  if (store.location) {
    address = store.location.display_address.join(', ');
  }
  let phoneNumber = null;
  if (store.display_phone) {
    phoneNumber = <div>Phone Number: {store.display_phone}</div>;
  }
  let status = null;
  if (store.is_closed) {
    status = <div className='red'>Closed</div>;
  } else {
    status = <div className='green'>Open</div>;
  }
  let storeRating = calculateStoreRatings(store);
  let coffeeRatingsForStore = coffeeRatingsByType(store, selectedCoffees);

  return (
    <div onClick={handleClick} className='column store-tile'>
      <div className='row'>
        <img
          className='store-tile-image'
          src={store.image_url}
          alt={store.image_url}
        />
        <div className='column'>
          <div>{store.name}</div>
          <div>{address}</div>
          {phoneNumber}
          <StarRatings
            rating={storeRating}
            starRatedColor='#bc005c'
            starDimension='25px'
            starSpacing='1px'
          />
          {loggedin && (
            <div id='reviewButtons'>
              <Review
                storeId={store.id}
                userId={currentUserId}
                allCoffeeType={allCoffeeType}
              />
            </div>
          )}
        </div>
      </div>
      <div>{status}</div>
      <div>
        <div>
          {coffeeRatingsForStore.map((coffeeType, index) => {
            if (coffeeType) {
              return <CoffeeReview key={index} coffee={coffeeType} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreTile;
