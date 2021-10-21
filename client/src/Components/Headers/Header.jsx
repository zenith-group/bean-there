import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBarComponents/SearchBar.jsx';

const Header = ({ loggedin, user, onClick, updateSearch, updateLocation, coffeeList, changeLocation }) => (
  <div id='header' className='header'>
    <Link to='/'><img className='logo' src={'./img/Bean_There.png'} alt='logo' /></Link>
    <SearchBar updateSearch={updateSearch} updateLocation={updateLocation} coffeeList={coffeeList} changeLocation={changeLocation}/>
    <div className='nav-bar'>
      {loggedin ? <Link to='/profile'><button>Accounts</button></Link> : <Link to='/login'><button>Login</button></Link>}
      {loggedin ? <Link to='/'><button onClick={() => {onClick()}}>Sign Out</button></Link> : <Link to='/signup'><button>Sign Up</button></Link>}
      {loggedin ? <h3>Welcome, {user.displayName}</h3> : <h3>Welcome, guest</h3>}
    </div>
  </div>
)

export default Header;