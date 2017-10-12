import React, { Component } from 'react';
import CardList from './CardList';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cards: [
      {
        name:'Sebastián Maldonado',
        avatar_url: 'https://avatars0.githubusercontent.com/u/524228?v=4',
        company: 'Becual.com'
      },
      {
        name:'Camilo',
        avatar_url: 'https://avatars1.githubusercontent.com/u/4587858?v=4',
        company: null
      }
    ]
  };
  

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Módulo 1 y 2</h1>
        </header>
        <br/>
          <Form />
          <CardList cards={this.state.cards}/>
      </div>
      
    );
  }
}

export default App;
