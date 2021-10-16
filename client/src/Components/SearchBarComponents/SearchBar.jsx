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
    this.inputChange = this.inputChange.bind(this);
    this.categoriesChange = this.categoriesChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
  }

  inputChange() {}
  categoriesChange() {}
  locationChange() {}

  render() {
    return (
      <form>
        <Input input={this.state.input} handleChange={this.inputChange} />
        <Categories
          categories={this.state.categories}
          handleChange={this.categoriesChange}
        />
        <Location
          location={this.state.location}
          handleChange={this.locationChange}
        />
      </form>
    );
  }
}

export default SearchBar;
