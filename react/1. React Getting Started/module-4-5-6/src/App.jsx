import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Módulo 4, 5 y 6</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
