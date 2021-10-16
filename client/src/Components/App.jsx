import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import SearchBar from './SearchBarComponents/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='app'>
        <h1>Hello from App.js</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
