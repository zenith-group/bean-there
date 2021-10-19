import React from 'react';
import UserReviews from './UserReviews.jsx';

const Profile = ({ reviews }) => (
  <div id='profile'>
    <UserReviews reviews={reviews}/>
  </div>
)

export default Profile;