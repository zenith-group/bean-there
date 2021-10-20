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
      submitted:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var body = {
      typeOfCoffee: e.target[0].value,
      nameOfDrink: e.target[1].value,
      rating: this.state.rating,
      review: e.target[2].value
    };
    this.setState({submitted:true})
    axios.post("/reviews", body).then((respond) => {
      console.log(respond);
    });
  }

  handleClick(e) {
    this.setState({ rating: e });
  }
  hide() {
    this.setState({ show: false });
    this.setState({submitted:false})
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
              {this.state.submitted? <div><h1>Thank You For Your Feedback!</h1><button  onClick={this.hide}>Close</button></div>:
            <form onSubmit={this.handleSubmit}>
              <div>
                <span className="required">Coffee Type: *</span>
                <select name="coffee" id="coffeeType">
                  <option value="None">None</option>
                  <option value="Espresso">Espresso</option>
                  <option value="Latte">Latte</option>
                  <option value="Cappuccino">Cappuccino</option>
                  <option value="Other">Other</option>
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
                  emptySymbol={
                    <img
                      src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png"
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src="https://dreyescat.github.io/react-rating/assets/images/star-full.png"
                      className="icon"
                    />
                  }
                  initialRating={this.state.rating}
                />
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
             }
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Review;
