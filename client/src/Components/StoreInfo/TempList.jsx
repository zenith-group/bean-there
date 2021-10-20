import React from 'react';
//import tempStoreList from './tempStoreList.js';

const TempList = ({ storeList, select }) => {
  return (
    <li id='store-list' className='column'>
      {storeList.map((store, i) => {
        return <StoreButton key={i} store={store} select={select} />;
      })}
    </li>
  );
};

const StoreButton = ({ store, select }) => {
  const handleClick = () => {
    select(store);
  };
  return <button onClick={handleClick}>{store.name}</button>;
};

export default TempList;
