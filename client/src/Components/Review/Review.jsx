import React from "react";
import ReactDOM from "react-dom";
import "./Review.css";
import StarRating from "react-rating";
import axios from "axios";
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      show: false,
      submitted: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.storeId);
    console.log(this.props.userId);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(this.state.rating);
    console.log(e.target[2].value);
    var body = {
      typeOfCoffee: e.target[0].value,
      nameOfDrink: e.target[1].value,
      rating: this.state.rating,
      review: e.target[2].value,
    };
    this.setState({ submitted: true });
    this.setState({rating:0})
    axios.post("/reviews", body).then((respond) => {
      console.log(respond);
    });
  }

  handleClick(e) {
    this.setState({ rating: e });
  }
  hide() {
    this.setState({ show: false });
    this.setState({ submitted: false });
  }
  show() {
    this.setState({ show: true });
  }
  render() {
    return (
      <>
        <div>
          <button onClick={this.show} id="addButton">
            Add Review
          </button>
        </div>
        {this.state.show && (
          <div id="contact-form">
            <button id="hide" onClick={this.hide}>
              X
            </button>
            <div>
              <h1>Nice to Hear From You!</h1>
            </div>
            <div>
              {this.state.submitted ? (
                <div>
                  <h1>Thank You For Your Feedback!</h1>
                  <button onClick={this.hide}>Close</button>
                </div>
              ) : (
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <span className="required">Coffee Type: </span>
                    <select name="coffee" id="coffeeType">
                        <option>None</option>
                    {this.props.allCoffeeType.map((type, index)=>
                        <option value={index+1}>{type}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <span className="required">Name Of The Coffee: *</span>
                    <input type="text" required="required" />
                  </div>
                  <div>
                    <span className="required">Rating: </span>
                    <br />
                    <StarRating
                      onClick={this.handleClick}
                      emptySymbol={[
                        "fas fa-coffee fa-2x empty"
                      ]}
                      fullSymbol={[
                        "fas fa-coffee fa-2x full"
                      ]}
                      initialRating={this.state.rating}
                    />
                    {this.state.rating===1? <span id='ratingInfo'>Bummer</span>: ''}
                    {this.state.rating===2? <span id='ratingInfo'>Whatever</span>: ''}
                    {this.state.rating===3? <span id='ratingInfo'>Not bad</span>: ''}
                    {this.state.rating===4? <span id='ratingInfo'>Good</span>: ''}
                    {this.state.rating===5? <span id='ratingInfo'>Awsome!!</span>: ''}

                  </div>
                  <div>
                    <span className="required">Review: *</span>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please write your review here."
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button id="submitButton">Submit Review</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Review;
