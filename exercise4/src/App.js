import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      var theFlix = [{movieName: 'Stranger Things', yearReleased: 2016, genre: 'Horror'}, {movieName: 'Tau', yearReleased: 2018, genre: 'Horror'}, {movieName: 'The Office', yearReleased: 2007, genre: 'Comedy'}]
      
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
