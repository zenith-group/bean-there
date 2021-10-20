import React from 'react';
import Review from '../Review/Review.jsx';

const StoreTile = ({ store, select, user, allCoffeeType, loggedin}) => {
  const handleClick = () => {
    select(store);
  };
  return (
    <div onClick={handleClick} className='row store-tile'>
      <img className='storeImage' src={store.image_url} alt={store.image_url} />
      <div className='column'>
        <div>{store.name}</div>
      </div>
      {loggedin && <div id ='reviewButtons'>
        <Review storeId = {store.id} userId={user} allCoffeeType={allCoffeeType}/>
      </div>}
    </div>
  );
};

export default StoreTile;
