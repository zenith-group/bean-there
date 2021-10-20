import React from "react";
import ReactDOM from "react-dom";
import "./UpdateForm.css";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      newName: null,
      newPassword: null,
      newPhotoURL: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      show: false
    })





  }

  hide() {
    this.setState({ show: false });
  }
  show() {
    this.setState({ show: true });
  }
  render() {
    return (
      <>
        <div>
          <button onClick={this.show} id="updateButton">
            Update Profile
          </button>
        </div>
        {this.state.show && (
          <div id="update-form">
            <button id="hide" onClick={this.hide}>
              X
            </button>
            <div>
              <h1>Update Profile</h1>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div>
                <span className="required">New Username (optional)</span>
                <input type="text" placeholder={this.props.user.displayName}/>
              </div>
              <div>
                <span className="required">New Password (optional)</span>
                <input type="password" placeholder={"*******"}/>
              </div>
              <div>
                <span className="required">New Photo URL (optional)</span>
                <input type="text" placeholder="Ex: https://example.com/new-picture.jpg"/>
              </div>
              <div>
                <button id="submitButton">Submit</button>
              </div>
            </form>

            </div>
        )}
      </>
    );
  }
}

export default UpdateForm;