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
      currentLocation: { lat: 40.8456062, lng: -73.9947449 },
      loggedin: false,
      userReviews: [],
      user: {},
      selectedStore: null,
      reviewsByStore: [],
      storeList: [],
      currentUserId:'',
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.onSignoutClick = this.onSignoutClick.bind(this);
    this.getCoffeeTypes = this.getCoffeeTypes.bind(this);
    this.selectStore = this.selectStore.bind(this);
    this.getReviewsByStore = this.getReviewsByStore.bind(this);
    this.getYelp = this.getYelp.bind(this);
  }

  updateSearch(term, coffeeList, location) {
    this.setState(
      {
        searchTerm: term,
        searchCoffeeList: coffeeList,
        inputLocation: location,
      },
      () => {
        this.getYelp();
      }
    );
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
      this.fetchUserReviews(user.uid);
      this.setState({
        user: user,
        loggedin: true,
        currentUserId: user.uid
      });
    } else {
      // No user is signed in
      this.setState({
        user: null,
        loggedin: false,
        currentUserId:''
      });
    }
  }

  getCoffeeTypes() {
    axios
      .get('/types')
      .then((res) => {
        let coffees = res.data.map((coffeeType) => coffeeType.name);
        this.setState({ allCoffeeList: coffees });
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
    axios
      .get('/coffee')
      .then((res) => {
        console.log(res.data);
        this.setState({
          storeList: res.data.businesses,
        });
      })
      .catch((err) => {
        console.err(err);
      });
  }

  selectStore(store) {
    this.getReviewsByStore(store);
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
                updateSearch={this.updateSearch}
                updateLocation={this.getCurrentLocation}
                coffeeList={this.state.allCoffeeList}
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
              />
              <div id='search-result'>
                <StoreList
                  select={this.selectStore}
                  storeList={this.state.storeList}
                  user = {this.state.currentUserId}
                  allCoffeeType = {this.state.allCoffeeList}
                  loggedin = {this.state.loggedin}
                  selectedCoffees={this.state.searchCoffeeList}
                />
                <Map currentLocation={this.state.currentLocation} store={this.state.storeList}/>
              </div>
              <StoreInfo
                store={this.state.selectedStore}
                reviews={this.state.reviewsByStore}
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
              />
              <Profile reviews={this.state.userReviews} />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
