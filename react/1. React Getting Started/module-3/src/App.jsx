import React, { Component } from 'react';
import CardList from './CardList';
import Form from './Form';
import logo from './logo.svg';
import './App.css';
import UserMessage from './UserMessage';
const R = require('ramda');

class App extends Component {

  state = {
    displayUserInCards: false,
    displayUserNotFound: false,
    cards: []
  };
 
  addNewCard = (card) => {
    this.setState((prevState)=>{
      if(R.contains(card, prevState.cards))
      {
        return {
          displayUserInCards: true, 
          cards: prevState.cards
        };
      }
      return {
        cards: prevState.cards.concat(card)
      };
    });
  };

  errorInCall =()=>{
    this.setState((prevState) => {
      return {
        displayUserNotFound: true
      }
    });
  };

  hiddeErrors = ()=>{
    this.setState(()=>{
      return {
        displayUserInCards: false,
        displayUserNotFound: false
      };
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Módulo 1 y 2</h1>
        </header>
        <br/>
          <Form onSubmit={this.addNewCard} onError={this.errorInCall} onChange={this.hiddeErrors}/>
          <UserMessage display={this.state.displayUserInCards} message={'User already in card list.'}/>
          <UserMessage display={this.state.displayUserNotFound} message={'User not found in Github.'}/>
          <CardList cards={this.state.cards}/>
      </div>
      
    );
  };
}

export default App;
