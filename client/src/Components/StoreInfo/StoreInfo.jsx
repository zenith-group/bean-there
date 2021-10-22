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
      <div className='row start align-center'>
        <img
          className='storeImage'
          src={store.image_url}
          alt={store.image_url}
        />
        <div className='column start store-info'>
          <div className='bold store-info-text'>{store.name}</div>
          <div className='store-info-text'>{address}</div>
          <div className='store-info-text'>Status: {status}</div>
          <div className='store-info-text'>Phone Number: {phoneNumber}</div>
        </div>
      </div>
      <div className='store-reviews'>
        <ReviewsList reviews={reviews} coffeeTypes={coffeeTypes} />
      </div>
    </div>
  );
};

export default StoreInfo;
