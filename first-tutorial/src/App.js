import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Result from './Result';

class App extends Component {
  state = {counter: 0};

  incrementCounter = (incrementValue)=>{
      this.setState((prevState)=>{
          return {
              counter: prevState.counter + incrementValue
          }
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First Tutorial</h1>
        </header>
        <br/>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
