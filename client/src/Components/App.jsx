import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomeHeader from './Headers/HomeHeader.jsx';
import Header from './Headers/Header.jsx';
import SearchBar from './SearchBarComponents/SearchBar.jsx';
import Map from './Map/Map.jsx';
import Review from './Review/Review.jsx';
import Profile from './Profile/Profile.jsx';
import SignUp from '../Auth/SignUp.jsx';
import Login from '../Auth/Login.jsx';
import { getAuth, signOut } from 'firebase/auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchCoffeeList: [],
      inputLocation: null,
      currentLocation: {},
      loggedin: false,
      userReviews: [],
      user: {},
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.onSignoutClick = this.onSignoutClick.bind(this);
    this.getCoffeeTypes = this.getCoffeeTypes.bind(this);
  }

  updateSearch(term, coffeeList, location) {
    this.setState({
      searchTerm: term,
      searchCoffeeList: coffeeList,
      inputLocation: location,
    });
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          currentLocation: { lat: latitude, lng: longitude },
        });
      }
    );
  }

  fetchUserReviews(user_id) {
    axios
      .get(`/reviews/users/${user_id}`)
      .then((result) => {
        this.setState({
          userReviews: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSignoutClick() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful
        this.setState({
          user: {},
          loggedin: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  authChange() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // User is signed in
      console.log(user);
      this.fetchUserReviews(user.uid);
      this.setState({
        user: user,
        loggedin: true,
      });
    } else {
      // No user is signed in
      this.setState({
        user: null,
        loggedin: false,
      });
    }
  }

  getCoffeeTypes() {
    axios
      .get('/types')
      .then((res) => {
        let coffees = res.data.map((coffeeType) => coffeeType.name);
        this.setState({ searchCoffeeList: coffees });
      })
      .catch((err) => {
        console.err(err);
      });
  }

  componentDidMount() {
    this.getCoffeeTypes();
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/'>
              <HomeHeader
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick}
              />
              <SearchBar
                updateSearch={this.updateSearch}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.searchCoffeeList}
              />
            </Route>
            <Route path='/login'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick.bind(this)}
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}
                coffeeList={this.state.searchCoffeeList}/>
              <Login
                authChange={this.authChange.bind(this)}
              />
              {this.state.loggedin ? <Redirect to='/'/> : null}
            </Route>
            <Route path='/signup'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick.bind(this)}
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}
                coffeeList={this.state.searchCoffeeList}/>
              <SignUp
                authChange={this.authChange.bind(this)}
              />
              {this.state.loggedin ? <Redirect to='/'/> : null}
            </Route>
            <Route path='/search'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick}
                updateSearch={this.updateSearch}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.searchCoffeeList}/>
              <Map currentLocation={this.state.currentLocation} />
              <Review />
            </Route>
            <Route path='/profile'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick}
                updateSearch={this.updateSearch}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.searchCoffeeList}/>
              <Profile reviews={this.state.userReviews}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
