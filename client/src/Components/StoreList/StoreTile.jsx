import React from 'react';

const StoreTile = ({ store, select }) => {
  const handleClick = () => {
    select(store);
  };
  return (
    <div onClick={handleClick} className='row store-tile'>
      <img className='storeImage' src={store.image_url} alt={store.image_url} />
      <div className='column'>
        <div>{store.name}</div>
      </div>
    </div>
  );
};

export default StoreTile;
