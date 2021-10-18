import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Map from './Map/Map.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <h1>Hello from App.js</h1>
        <Map />
      </div>
    );
  }
}

export default App;
