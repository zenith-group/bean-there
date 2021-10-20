import React from 'react';
<<<<<<< HEAD
import Review from '../Review/Review.jsx';

const StoreTile = ({ store, select, user, allCoffeeType, loggedin}) => {
=======
import StarRatings from 'react-star-ratings';
import CoffeeReview from './CoffeeReview.jsx';

const StoreTile = ({ store, select, selectedCoffees }) => {
>>>>>>> master
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
      {loggedin && <div id ='reviewButtons'>
        <Review storeId = {store.id} userId={user} allCoffeeType={allCoffeeType}/>
      </div>}
    </div>
  );
};

export default StoreTile;
