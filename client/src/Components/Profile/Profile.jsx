import React from 'react';
import UserReviews from './UserReviews.jsx';
import UserInfo from './UserInfo.jsx';
import './Profile.css';

const Profile = ({ reviews, user, authChange }) => (
  <div id='profile'>
    <UserInfo user={user} authChange={authChange}/>
    <UserReviews reviews={reviews}/>
  </div>
)

export default Profile;