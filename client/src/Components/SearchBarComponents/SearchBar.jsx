import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Input from './Input.jsx';
import Categories from './Categories.jsx';
import Location from './Location.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      location: '',
      categories: [],
    };
    this.categoriesChange = this.categoriesChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  categoriesChange(options) {
    this.setState({ categories: options });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.updateSearch(
      this.state.input,
      this.state.categories,
      this.state.location
    );
  }

  render() {
    let redirect = null;
    if (this.props.submitted) {
      redirect = <Redirect to='/search' />;
    }
    return (
      <form
        className='search-bar row center'
        onSubmit={this.handleSubmit}
      >
        <Input input={this.state.input} handleChange={this.handleChange} />
        <Categories
          categories={this.props.coffeeList}
          handleChange={this.categoriesChange}
        />
        <Location
          location={this.state.location}
          changeLocation={this.props.changeLocation}
        />
        <i onClick={this.props.updateLocation}>⌖</i>
        <button onClick={this.handleSubmit}>Search</button>
        {redirect}
      </form>
    );
  }
}

export default SearchBar;
