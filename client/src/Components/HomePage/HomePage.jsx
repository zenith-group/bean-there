import React from 'react';
import SearchBar from '../SearchBarComponents/SearchBar.jsx';

const HomePage = ({ getYelp,updateSearch, updateLocation, coffeeList }) => (
  <div id='home-page'>
    <SearchBar updateSearch={updateSearch} updateLocation={updateLocation} coffeeList={coffeeList} getYelp={getYelp}/>
  </div>
)

export default HomePage;