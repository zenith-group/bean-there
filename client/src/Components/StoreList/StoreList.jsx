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
  fetchUserReviews
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
            fetchUserReviews={fetchUserReviews}
          />
        );
      })}
    </li>
  );
};

export default StoreList;
