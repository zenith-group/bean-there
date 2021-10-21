import React from 'react';
import ReactDOM from 'react-dom';
import { getAuth, updateProfile, updateEmail, sendPasswordResetEmail } from "firebase/auth";
import UpdateForm from './UpdateForm.jsx';
import './UserInfo.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.makeProfileChange = this.makeProfileChange.bind(this);
    this.sendPasswordReset = this.sendPasswordReset.bind(this);
  }

  makeProfileChange(newName, newEmail, newPhoto) {
    var promises = [];

    // if name changed
    if (newName !== '') {
      promises.push(updateProfile(this.props.user, {
        displayName: newName
      })
      );
    }

    // if email changed
    if (newEmail !== '') {
      promises.push(updateEmail(this.props.user, newEmail));
    }

    // if photo changed
    if (newPhoto !== '') {
      promises.push(updateProfile(this.props.user, {
          photoURL: newPhoto
        })
      );
    }

    Promise.all(promises)
      .then(() => {
      // Profile updated!
      this.props.authChange();
      }).catch((error) => {
      console.log(error);
     });
  }

  sendPasswordReset() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, this.props.user.email)
      .then(() => {
        alert(`A password reset email has been sent to ${this.props.user.email}`);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div id='user-info'>
        <h2>My Profile</h2>
        {this.props.user.photoURL ?
          <img src={this.props.user.photoURL} className="profilePic"/>:
          <i className="fa fa-user-circle fa-5x"></i>
        }
        <div><b>Username:</b> {this.props.user.displayName}</div>
        <div><b>Email:</b> {this.props.user.email}</div>
        <UpdateForm makeProfileChange={this.makeProfileChange} user={this.props.user}/>
        <u onClick={this.sendPasswordReset}>Reset Password</u>
      </div>
    );
  }
}

export default UserInfo;
