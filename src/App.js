import React from 'react';
import './App.css';
import Board from './Board.js'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <header>Jeu du morpion</header>
        <div className = "game">
           <Board/>       
        </div>

      </div>
    );
  }
}

export default App;
