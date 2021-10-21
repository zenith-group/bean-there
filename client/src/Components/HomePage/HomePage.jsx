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
    {/* <div className='shape'><i class="far fa-circle"></i></div>
    <div className='shape'><i class="far fa-square"></i></div>
    <div className='shape'></div> */}
  </div>
);

export default HomePage;
