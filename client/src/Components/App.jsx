import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBarComponents/SearchBar.jsx';
import Map from './Map/Map.jsx';
import Profile from './Profile/Profile.jsx';
import SignUp from '../Auth/SignUp.jsx';
import SignIn from '../Auth/SignIn.jsx';

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

  // fetchUserReviews = (user_id)  => {
  //   axios.get('/user/reviews', { params: { user_id: user_id } })
  //     .then(result => {
  //       this.setState({
  //         userReviews: result.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // };

  render() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/'>
              <SearchBar
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}
              />
            </Route>
            <Route path='/search'>
              <Map currentLocation={this.state.currentLocation}/>
            </Route>
            <Route path='/profile'>
              <Profile reviews={this.state.userReviews}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
