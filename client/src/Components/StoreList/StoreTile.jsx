import React from 'react';
import StarRatings from 'react-star-ratings';
import CoffeeReview from './CoffeeReview.jsx';
import Review from '../Review/Review.jsx'

const StoreTile = ({ store, select, selectedCoffees, currentUserId, allCoffeeType, loggedin}) => {
  const handleClick = () => {
    select(store);
  };

  let address = store.location.display_address.join(', ');
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
            rating={0}
            starRatedColor='#bc005c'
            starDimension='25px'
            starSpacing='1px'
          />
          {loggedin && <div id ='reviewButtons'>
        <Review storeId = {store.id} userId={currentUserId} allCoffeeType={allCoffeeType}/>
      </div>}
        </div>
      </div>
      <div>{status}</div>
      <div>
        <div>
          {selectedCoffees.map((coffeeType) => {
            return <CoffeeReview coffee={coffeeType} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreTile;
