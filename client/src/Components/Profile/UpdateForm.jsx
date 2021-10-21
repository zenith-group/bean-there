import React from "react";
import ReactDOM from "react-dom";
import "./UpdateForm.css";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      newName: '',
      newPhoto: '',
      newEmail: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      show: false
    }, () => {
      this.props.makeProfileChange(this.state.newName, this.state.newEmail, this.state.newPhoto);
      this.setState({
        newName: '',
        newPhoto: '',
        newEmail: ''
      })
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
                <input onChange={this.handleInputChange} type="text" name="newName" value={this.state.newName} placeholder={this.props.user.displayName}/>
              </div>
              <div>
                <span className="required">New Email (optional)</span>
                <input onChange={this.handleInputChange} type="text" name="newEmail" value={this.state.newEmail} placeholder={this.props.user.email}/>
              </div>
              <div>
                <span className="required">New Photo URL (optional)</span>
                <input onChange={this.handleInputChange} type="text" name="newPhoto" value={this.state.newPhoto} placeholder="Ex: https://example.com/new-picture.jpg"/>
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