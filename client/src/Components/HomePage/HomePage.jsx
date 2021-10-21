import React from "react";
import SearchBar from "../SearchBarComponents/SearchBar.jsx";

const HomePage = ({ getYelp, updateSearch, updateLocation, coffeeList, changeLocation }) => (
  <div id="home-page">
    <SearchBar
      updateSearch={updateSearch}
      updateLocation={updateLocation}
      coffeeList={coffeeList}
      getYelp={getYelp}
      changeLocation={changeLocation}
    />
  </div>
);

export default HomePage;
