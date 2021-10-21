import React from 'react';
import UserReviews from './UserReviews.jsx';
import './Profile.css';

const Profile = ({ reviews }) => (
  <div id='profile'>
    <UserReviews reviews={reviews}/>
  </div>
)

export default Profile;