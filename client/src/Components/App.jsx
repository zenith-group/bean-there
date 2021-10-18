import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './SearchBarComponents/SearchBar.jsx';
import Map from './Map/Map.jsx';
import Profile from './Profile/Profile.jsx';
import SignUp from '../Auth/SignUp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchCoffeeList: [],
      inputLocation: null,
      currentLocation: {},
      loggedin: false,
      userReviews: []
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

  fetchUserReviews(user_id) {
    axios.get('/user/reviews', { params: { user_id: user_id } })
      .then(result => {
        this.setState({
          userReviews: result.data
        });
      })
      .catch(error => {
        console.log(error);
      })
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
        <Profile reviews={this.state.userReviews}/>
        <SignUp />
      </div>
    );
  }
}

export default App;
