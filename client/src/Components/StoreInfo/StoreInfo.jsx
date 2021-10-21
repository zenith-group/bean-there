import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import './StoreInfo.css';

const StoreInfo = ({ store, reviews, coffeeTypes }) => {
  if (store === null) {
    return null;
  }
  let status = store.is_closed ? 'Closed' : 'Open';
  let phoneNumber = store.display_phone || null;
  // if (store.display_phone) {
  //   phoneNumber = store.display_phone;
  // }
  let address = store.location.display_address.join(', ');
  return (
    <div className='store-information'>
      <div className='store-details'>
        <img
          className='storeImage'
          src={store.image_url}
          alt={store.image_url}
        />
        <div className='store-reviews-container'>
          <h3>{store.name}</h3>
          <h3>{address}</h3>
          <h3>Status: {status}</h3>
          <h3>Phone Number: {phoneNumber}</h3>
        </div>
      </div>
      <div className='store-reviews'>
        <ReviewsList reviews={reviews} coffeeTypes={coffeeTypes}/>
      </div>
    </div>
  );
};

export default StoreInfo;
