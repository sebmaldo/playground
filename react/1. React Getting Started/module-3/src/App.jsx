import React, { Component } from 'react';
import CardList from './CardList';
import Form from './Form';
import logo from './logo.svg';
import './App.css';
const R = require('ramda');

/** This should be components outside, but the course don`t have it so*/
const UserInCard = (props)=>{
  return (
    <div className={props.display ? '' : 'hidden'}>The user is already in the cards.</div>
  );
}

const UserNotFound = (props) => {
  return (
    <div className={props.display ? '': 'hidden'}>The user don't exists in github.</div>
  );
}

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
          <UserInCard display={this.state.displayUserInCards}/>

          <UserNotFound display={this.state.displayUserNotFound}/>
          <CardList cards={this.state.cards}/>
      </div>
      
    );
  };
}

export default App;
