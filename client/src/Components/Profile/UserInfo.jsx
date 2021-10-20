import React from 'react';
import ReactDOM from 'react-dom';
import { updateProfile } from "firebase/auth";
import UpdateForm from './UpdateForm.jsx';
import './UserInfo.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      photoURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/11-squidgame-unit-02-1632338259.jpg?resize=480:*',
      update: true
    };
    this.makeProfileChange = this.makeProfileChange.bind(this);
  }

  makeProfileChange() {
    updateProfile(this.props.user, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    })
      .then(() => {
      // Profile updated!
      // ...
      }).catch((error) => {
      // An error occurred
      // ...
     });
  }

  render() {
    return (
      <div>
        <h2>User Info </h2>
        {this.props.user.photoURL ?
          <img src={this.props.user.photoURL} className="profilePic"/>:
          <i className="fa fa-user-circle fa-5x"></i>
        }
        <div><b>Username:</b> {this.props.user.displayName}</div>
        <div><b>Email:</b> {this.props.user.email}</div>
        {this.state.update ? <UpdateForm user={this.props.user}/> : null}
      </div>
    );
  }
}

export default UserInfo;
