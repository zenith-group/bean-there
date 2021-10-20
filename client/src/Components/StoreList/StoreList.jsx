import React from 'react';
import StoreTile from './StoreTile.jsx';

const StoreList = ({ storeList, select, user, allCoffeeType, loggedin}) => {
  return (
    <li id='store-list' className='column'>
      {storeList.map((store, i) => {
        return <StoreTile key={i} store={store} select={select} user ={user} allCoffeeType ={allCoffeeType} loggedin ={loggedin}/>;
      })}
    </li>
  );
};

export default StoreList;
