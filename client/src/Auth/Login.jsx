// Login existing users (https://firebase.google.com/docs/auth/web/start)

import React from 'react';
import app from './firebase_setup.jsx';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from 'firebase/app';


class Login extends React.Component {
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
  this.handleGoogle = this.handleGoogle.bind(this);
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
        console.log(errorCode, errorMessage);
        this.setState({
          error: 'Please enter a valid email address and password.'
        });
      });
  }

  handleGoogle(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.props.authChange();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  render() {
    return (
      <div>
        <form className="Login">
          <h2>Login</h2><br></br>
          <label>
            Email:<br></br>
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          </label><br></br>
          <label>
            Password:<br></br>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label><br></br>
          <input type="submit" value="Login" onClick={this.handleSubmit}/>
          {this.state.error ? <div>{this.state.error}</div> : null}
        </form>
        <button onClick={this.handleGoogle}>Sign in with Google</button>
      </div>
    );
  }
}

export default Login;
