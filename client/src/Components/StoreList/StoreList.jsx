import React from "react";
import StoreTile from "./StoreTile.jsx";

const StoreList = ({
  storeList,
  select,
  selectedCoffees,
  currentUserId,
  allCoffeeType,
  loggedin,
  storeRatings,
  coffeeRatings,
}) => {
  return (
    <li id='store-list' className='column'>
      {storeList?.map((store, i) => {
        return (
          <StoreTile
            key={i}
            store={store}
            select={select}
            selectedCoffees={selectedCoffees}
            currentUserId={currentUserId}
            allCoffeeType={allCoffeeType}
            loggedin={loggedin}
            storeRatings={storeRatings}
            coffeeRatings={coffeeRatings}
          />
        );
      })}
    </li>
  );
};

export default StoreList;
