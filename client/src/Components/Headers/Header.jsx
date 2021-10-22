import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBarComponents/SearchBar.jsx';
import './Header.css';

const Header = ({ loggedin, user, onClick, updateSearch, updateLocation, coffeeList, changeLocation, submitted }) => (
  <div id='header' className='header'>
    <Link to='/'><img className='logo' src={'./img/Bean_There.png'} alt='logo' /></Link>
    <SearchBar updateSearch={updateSearch} updateLocation={updateLocation} coffeeList={coffeeList} changeLocation={changeLocation} submitted={submitted} />
    <div className='nav-bar'>
      {loggedin ? <Link to='/profile'><button>My Profile</button></Link> : <Link to='/login'><a className='logginButton'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
    </a></Link>}
      {loggedin ? <Link to='/'><a className='logginButton' onClick={() => {onClick()}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sign Out
    </a></Link> : <Link to='/signup'><a className='logginButton'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sign Up
    </a></Link>}
      {loggedin ? <h3>Welcome, {user.displayName}</h3> : <h3>Welcome, guest</h3>}
      {user.photoURL ? <div className="headerProfilePic"><img src={user.photoURL} className="headerProPic"/></div> : <i className="fa fa-user-circle fa-3x"></i>
      }
    </div>
  </div>
)

export default Header;