import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HomeHeader = ({ loggedin, user, onClick }) => (
  <div id='home-header' className='header'>
    <Link to='/'><img className='logo' src={'./img/Bean_There.gif'} alt='logo' /></Link>
    <div className='nav-bar'>
      {loggedin ? <Link to='/profile'><a className='logginButton'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        My Profile
    </a></Link> : <Link to='/login'><a className='logginButton'>
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
    </a></Link> : <Link to='/signup'> <a className='logginButton'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sign Up
    </a></Link>}
      {loggedin ? <h3>Welcome, {user.displayName} </h3> : <h3>Welcome, guest</h3>}
      {user.photoURL ? <div className="headerProfilePic"><img src={user.photoURL} className="headerProPic"/></div> : <i className="fa fa-user-circle fa-3x"></i>}
    </div>
  </div>
)

export default HomeHeader;