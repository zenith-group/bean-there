import React from 'react';
import UserReviews from './UserReviews.jsx';
import UserInfo from './UserInfo.jsx';

const Profile = ({ reviews, user }) => (
  <div id='profile'>
    <UserInfo user={user}/>
    <UserReviews reviews={reviews}/>
  </div>
)

export default Profile;