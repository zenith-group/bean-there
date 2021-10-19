import React from 'react';
import tempStoreList from './tempStoreList.js';

const TempList = (props) => {
  return (
    <li className='column'>
      {tempStoreList.map((store, i) => {
        return <StoreButton key={i} store={store} select={props.select} />;
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
