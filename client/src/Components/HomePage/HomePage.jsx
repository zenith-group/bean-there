import React from 'react';
import SearchBar from '../SearchBarComponents/SearchBar.jsx';

const HomePage = ({ updateSearch, updateLocation, coffeeList }) => (
  <div id='home-page'>
    <SearchBar updateSearch={updateSearch} updateLocation={updateLocation} coffeeList={coffeeList}/>
  </div>
)

export default HomePage;