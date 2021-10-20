import React from 'react';
import StoreTile from './StoreTile.jsx';

const StoreList = ({ storeList, select, selectedCoffees }) => {
  return (
    <li id='store-list' className='column'>
      {storeList.map((store, i) => {
        return (
          <StoreTile
            key={i}
            store={store}
            select={select}
            selectedCoffees={selectedCoffees}
          />
        );
      })}
    </li>
  );
};

export default StoreList;
