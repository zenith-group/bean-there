import React from 'react';
import StarRatings from 'react-star-ratings';

class Stars extends React.Component {
  changeRating(rating, name) {
    this.setState({
      rating: rating,
    });
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
      />
    );
  }
}
