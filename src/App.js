import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            実践React Native
          </h1>
          <h2 style={{color: 'yellow'}}>
            ￥1,000
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
