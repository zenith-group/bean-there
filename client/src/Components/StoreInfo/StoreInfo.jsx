import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const StoreInfo = ({ store, reviews }) => {
  if (store === null) {
    return null;
  }
  let status = store.is_closed ? 'Closed' : 'Open';
  let phoneNumber = null;
  if (store.display_phone) {
    phoneNumber = <li>Phone Number: {store.display_phone}</li>;
  }
  let address = store.location.display_address.join(', ');
  return (
    <div>
      <div className='column'>
        Store info
        <div className='row'>
          <img
            className='storeImage'
            src={store.image_url}
            alt={store.image_url}
          />
          <ul>
            <li>Store Name: {store.name}</li>
            <li>Address: {address}</li>
            <li>Open Status: {status}</li>
            {phoneNumber}
          </ul>
        </div>
        <div>Reviews</div>
        <div>
          <ReviewsList reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
