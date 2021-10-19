// Login existing users (https://firebase.google.com/docs/auth/web/start)

import React from 'react';
import app from './firebase_setup.jsx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
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

    // Login existing user
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.props.authChange();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  render() {
    return (
      <form className="Login">
        <h2>Login</h2>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
        </label>
        <label>
          Password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Login" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default Login;
