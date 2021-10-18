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
    this.updateSearch = this.updateSearch.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateSearch(term, coffeeList, location) {
    this.setState({
      searchTerm: term,
      searchCoffeeList: coffeeList,
      inputLocation: location,
    });
  }

  updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });

      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Hello from App.js</h1>
        <SearchBar
          updateSearch={this.updateSearch}
          updateLocation={this.updateLocation}
        />
        <Map />
      </div>
    );
  }
}

export default App;
