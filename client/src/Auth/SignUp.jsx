// Sign up new users (https://firebase.google.com/docs/auth/web/start)

import React from 'react';
import app from './firebase_setup.jsx';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { initializeApp } from 'firebase/app';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      error: null
    };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const auth = getAuth();

    // Create new user
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // add username to their profile
        updateProfile(auth.currentUser, {
          displayName: this.state.username
        })
          .then(() => {
            this.props.authChange();
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        this.setState({
          error: 'Please enter a valid email address and password with at least 6 characters.'
        });
      });
  }

  render() {
    return (
      <form className="SignUp">
        <h2>Create Account</h2>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Sign Up" onClick={this.handleSubmit}/>
        {this.state.error ? <span>{this.state.error}</span> : null}
      </form>
    );
  }
}

export default SignUp;
