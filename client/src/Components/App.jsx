import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './SearchBarComponents/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchCoffeeList: [],
      inputLocation: null,
      currentLocation: null,
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
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });

    this.setState({ currentLocation: location });
  }

  render() {
    return (
      <div className='app'>
        <h1>Hello from App.js</h1>
        <SearchBar
          updateSearch={this.updateSearch}
          updateLocation={this.updateLocation}
        />
      </div>
    );
  }
}

export default App;
