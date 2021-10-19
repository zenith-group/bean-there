import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBarComponents/SearchBar.jsx';

const Header = ({ loggedin, user, onClick, updateSearch, updateLocation }) => (
  <div id='header' className='header'>
    <img className='logo' src={'./img/Bean_There.png'} alt='logo' />
    <SearchBar updateSearch={updateSearch} updateLocation={updateLocation}/>
    <div className='nav-bar'>
      {loggedin ? <button><Link to='/profile'>Accounts</Link></button> : <button><Link to='login'>Login</Link></button>}
      {loggedin ? <button onClick={() => {onClick()}}><Link to='/'>Sign Out</Link></button> : <button><Link to='signup'>Sign Up</Link></button>}
      {loggedin ? <h3>Welcome, {user.name}</h3> : <h3>Welcome, guest</h3>}
    </div>
  </div>
)

export default Header;