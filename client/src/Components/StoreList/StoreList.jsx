import React from 'react';
import StoreTile from './StoreTile.jsx';

const StoreList = ({ storeList, select }) => {
  return (
    <li id='store-list' className='column'>
      {storeList.map((store, i) => {
        return <StoreTile key={i} store={store} select={select} />;
      })}
    </li>
  );
};

export default StoreList;
