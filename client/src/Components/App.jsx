import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './SearchBarComponents/SearchBar.jsx';
import Map from './Map/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchCoffeeList: [],
      inputLocation: null,
      currentLocation: {},
    };
  }

  updateSearch(term, coffeeList, location) {
    this.setState({
      searchTerm: term,
      searchCoffeeList: coffeeList,
      inputLocation: location,
    });
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        currentLocation: { lat: latitude, lng: longitude }
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>Hello from App.js</h1>
        <SearchBar
          updateSearch={this.updateSearch.bind(this)}
          updateLocation={this.getCurrentLocation.bind(this)}
        />
        <Map currentLocation={this.state.currentLocation}/>
      </div>
    );
  }
}

export default App;
