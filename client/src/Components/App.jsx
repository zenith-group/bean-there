import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeHeader from './Headers/HomeHeader.jsx';
import Header from './Headers/Header.jsx';
import SearchBar from './SearchBarComponents/SearchBar.jsx';
import Map from './Map/Map.jsx';
import Review from './Review/Review.jsx'
import Profile from './Profile/Profile.jsx';
import SignUp from '../Auth/SignUp.jsx';
import Login from '../Auth/Login.jsx';
import { getAuth, signOut } from "firebase/auth";


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
      user: {}
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

  fetchUserReviews = (user_id)  => {
    axios.get(`/reviews/users/?user_id=${user_id}`)
      .then(result => {
        this.setState({
          userReviews: result.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  };

  onSignoutClick() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful
        this.setState({
          user: {},
          loggedin: false
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  authChange() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // User is signed in
      console.log(user)
      this.fetchUserReviews(user.uid);
      this.setState({
        user: user,
        loggedin: true
      });
    } else {
      // No user is signed in
      this.setState({
        user: null,
        loggedin: false
      });
    }
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/'>
              <HomeHeader loggedin={this.state.loggedin} user={this.state.user} onClick={this.onSignoutClick.bind(this)}/>
              <SearchBar
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}
              />
            </Route>
            <Route path='/login'>
              <Login
                authChange={this.authChange.bind(this)}
              />
              {this.state.loggedin ? <Redirect to='/'/> : null}
            </Route>
            <Route path='/signup'>
              <SignUp
                authChange={this.authChange.bind(this)}
              />
              {this.state.loggedin ? <Redirect to='/'/> : null}
            </Route>
            <Route path='/search'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick.bind(this)}
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}/>
              <Map currentLocation={this.state.currentLocation}/>
            </Route>
            <Route path='/profile'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick.bind(this)}
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}/>
              <Profile reviews={this.state.userReviews}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
