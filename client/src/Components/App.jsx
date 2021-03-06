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
import HomePage from './HomePage/HomePage.jsx';
import SearchBar from './SearchBarComponents/SearchBar.jsx';
import Map from './Map/Map.jsx';
import KEYS from "/config.js";
import Profile from './Profile/Profile.jsx';
import SignUp from '../Auth/SignUp.jsx';
import Login from '../Auth/Login.jsx';
import { getAuth, signOut } from 'firebase/auth';
import StoreInfo from './StoreInfo/StoreInfo.jsx';
import StoreList from './StoreList/StoreList.jsx';
import Footer from './Footers/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchCoffeeList: [],
      allCoffeeList: [],
      inputLocation: null,
      currentLocation: { lat: 40.702501851176706, lng: -73.94245147705078 },
      loggedin: false,
      userReviews: [],
      user: {},
      selectedStore: null,
      reviewsByStore: [],
      storeList: [],
      storeListObj: {},
      currentUserId: '',
      searchBarSubmitted: false,
      geolocated: ''
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.onSignoutClick = this.onSignoutClick.bind(this);
    this.getCoffeeTypes = this.getCoffeeTypes.bind(this);
    this.selectStore = this.selectStore.bind(this);
    this.getReviewsByStore = this.getReviewsByStore.bind(this);
    this.getYelp = this.getYelp.bind(this);
    this.fetchUserReviews = this.fetchUserReviews.bind(this);
  }

  changeLocation(lat, lng, mapMoved) {
    if(!mapMoved){
      this.setState({
        currentLocation: { lat: lat, lng: lng },
      });
    } else {
      this.setState({
        currentLocation: { lat: lat, lng: lng },
      }, () => { this.getYelp() });
    }
  }

  updateSearch(term, coffeeList, location) {
    location = location ||  { lat: 40.702501851176706, lng: -73.94245147705078 }
    Promise.resolve(
      this.setState({
        searchTerm: term,
        searchCoffeeList: coffeeList,
        currentLocation: location,
      })
    )
      .then(() => {
        this.getYelp();
      })
      .then(() => {
        this.setState({ searchBarSubmitted: true });
      })
      .then(() => {
        this.setState({ searchBarSubmitted: false });
      });
  }

  getCurrentLocation(callBack) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        callBack({lat: latitude, lng: longitude})
        this.setState({
          currentLocation: { lat: latitude, lng: longitude },
        });
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${KEYS.google}`)
        .then(res => this.setState({
          geolocated: res.data.results[0].formatted_address
        }))
        .catch(err => console.log(err))
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
      this.fetchUserReviews(user.uid);
      this.setState({
        user: user,
        loggedin: true,
        currentUserId: user.uid,
      });
    } else {
      // No user is signed in
      this.setState({
        user: null,
        loggedin: false,
        currentUserId: '',
      });
    }
  }

  getCoffeeTypes() {
    axios
      .get('/types')
      .then((res) => {
        let coffees = res.data.map((coffeeType) => coffeeType.name);
        this.setState({ allCoffeeList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getReviewsByStore(store) {
    axios.get(`/reviews/stores/${store.id}`).then((res) => {
      this.setState({ selectedStore: store, reviewsByStore: res.data });
    });
  }

  getYelp() {
    let location = this.state.currentLocation;
    let searchTerm = 'coffee';
    if (this.state.searchTerm.length > 0) {
      searchTerm = this.state.searchTerm;
    }
    axios
      .get(`/coffee/${location.lat}/${location.lng}?term=${searchTerm}`)
      .then((res) => {
        let result = [];
        for (let key in res.data) {
          result.push(res.data[key]);
        }
        this.setState({
          storeListObj: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectStore(store) {
    // this.getReviewsByStore(store);
    this.setState({
      selectedStore: this.state.storeListObj[store.id],
      reviewsByStore: this.state.storeListObj[store.id].reviews,
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
              <HomePage
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.allCoffeeList}
                getYelp={this.getYelp.bind(this)}
                changeLocation={this.changeLocation.bind(this)}
                submitted={this.state.searchBarSubmitted}
                geolocated={this.state.geolocated}
              />
              <Footer />
            </Route>
            <Route path='/login'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick.bind(this)}
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}
                coffeeList={this.state.allCoffeeList}
                changeLocation={this.changeLocation.bind(this)}
                submitted={this.state.searchBarSubmitted}
                geolocated={this.state.geolocated}
              />
              <Login authChange={this.authChange.bind(this)} />
              <Footer />
              {this.state.loggedin ? <Redirect to='/' /> : null}
            </Route>
            <Route path='/signup'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick.bind(this)}
                updateSearch={this.updateSearch.bind(this)}
                updateLocation={this.getCurrentLocation.bind(this)}
                coffeeList={this.state.allCoffeeList}
                changeLocation={this.changeLocation.bind(this)}
                submitted={this.state.searchBarSubmitted}
                geolocated={this.state.geolocated}
              />
              <SignUp authChange={this.authChange.bind(this)} />
              <Footer />
              {this.state.loggedin ? <Redirect to='/' /> : null}
            </Route>
            <Route path='/search'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick}
                updateSearch={this.updateSearch}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.allCoffeeList}
                changeLocation={this.changeLocation.bind(this)}
                submitted={this.state.searchBarSubmitted}
                geolocated={this.state.geolocated}
              />
              <div id='search-result'>
                <StoreList
                  select={this.selectStore}
                  storeList={Object.values(this.state.storeListObj)}
                  selectedCoffees={this.state.searchCoffeeList}
                  currentUserId={this.state.currentUserId}
                  allCoffeeType={this.state.allCoffeeList}
                  loggedin={this.state.loggedin}
                  fetchUserReviews={this.fetchUserReviews}
                />
                <Map
                  currentLocation={this.state.currentLocation}
                  store={Object.values(this.state.storeListObj)}
                  select={this.selectStore}
                  changeLocation={this.changeLocation.bind(this)}
                />
              </div>
              <StoreInfo
                store={this.state.selectedStore}
                reviews={this.state.reviewsByStore}
                coffeeTypes={this.state.allCoffeeList}
              />
              <Footer />
            </Route>
            <Route path='/profile'>
              <Header
                loggedin={this.state.loggedin}
                user={this.state.user}
                onClick={this.onSignoutClick}
                updateSearch={this.updateSearch}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.allCoffeeList}
                changeLocation={this.changeLocation.bind(this)}
                submitted={this.state.searchBarSubmitted}
                geolocated={this.state.geolocated}
              />
              <Profile
                reviews={this.state.userReviews}
                user={this.state.user}
                authChange={this.authChange.bind(this)}
              />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
