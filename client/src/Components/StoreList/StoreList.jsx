import React from 'react';
import StoreTile from './StoreTile.jsx';

const StoreList = ({ storeList, select, selectedCoffees, user, allCoffeeType, loggedin }) => {
  return (
    <li id='store-list' className='column'>
      {storeList.map((store, i) => {
        return (
          <StoreTile
            key={i}
            store={store}
            select={select}
            selectedCoffees={selectedCoffees}
            user ={user}
            allCoffeeType ={allCoffeeType}
            loggedin ={loggedin}
          />
        );
      })}
    </li>
  );
};

export default StoreList;
