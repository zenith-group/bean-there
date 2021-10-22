import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HomeHeader = ({ loggedin, user, onClick }) => (
  <div id='home-header' className='header'>
    <Link to='/'><img className='logo' src={'./img/Bean_There.GIF'} alt='logo' /></Link>
    <div className='nav-bar'>
      {loggedin ? <Link to='/profile'><button>{'My Profile'}</button></Link> : <Link to='/login'><button>Login</button></Link>}
      {loggedin ? <Link to='/'><button onClick={() => {onClick()}}>Sign Out</button></Link> : <Link to='/signup'><button>Sign Up</button></Link>}
      {loggedin ? <h3>Welcome, {user.displayName} </h3> : <h3>Welcome, guest</h3>}
      {user.photoURL ? <div className="headerProfilePic"><img src={user.photoURL} className="headerProPic"/></div> : <i className="fa fa-user-circle fa-3x"></i>}
    </div>
  </div>
)

export default HomeHeader;