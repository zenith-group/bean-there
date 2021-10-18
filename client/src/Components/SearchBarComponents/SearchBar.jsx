import React from 'react';
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
    return (
      <form className='row center' onSubmit={this.handleSubmit}>
        <Input input={this.state.input} handleChange={this.handleChange} />
        <Categories
          categories={this.state.categories}
          handleChange={this.categoriesChange}
        />
        <Location
          location={this.state.location}
          handleChange={this.handleChange}
        />
        <button onClick={this.props.updateLocation}>⌖</button>
        <input type='submit' value='Search' />
      </form>
    );
  }
}

export default SearchBar;
