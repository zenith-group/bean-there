import React from "react";
import SearchBar from "../SearchBarComponents/SearchBar.jsx";

const HomePage = ({ geolocated ,getYelp, updateSearch, updateLocation, coffeeList, changeLocation, submitted }) => (
  <div id="home-page">
    <SearchBar
      updateSearch={updateSearch}
      updateLocation={updateLocation}
      coffeeList={coffeeList}
      getYelp={getYelp}
      changeLocation={changeLocation}
      submitted={submitted}
      geolocated={geolocated}
    />
    {/* <div className='shape'><i class="far fa-circle"></i></div>
    <div className='shape'><i class="far fa-square"></i></div>
    <div className='shape'></div> */}
  </div>
);

export default HomePage;
