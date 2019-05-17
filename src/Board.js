import React from 'react';
import Square from './Square.js'
import './Board.css'

const DEFAULT_STATE = {squares: Array(9).fill(null), isNext: true}


class Board extends React.Component {

    state = {
        squares: Array(9).fill(null),
        isNext: true,
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
      }

      displayNul() {
          let squares = this.state.squares
          const winner = calculateWinner(squares);
          if(squares.indexOf(null)===-1) {
              return (
                <div className = "replay">
                  <p>Egalité</p>
                  <button onClick = {this.replay}>Rejouer ?</button>
                </div>

              )
          }
          else {
              
                if (winner) {
                    return (
                      <div className = "replay">
                       <p>Winner : {winner}</p>
                       <button onClick = {this.replay}>Rejouer ?</button>
                      </div>
                    )
                  } 
                  
                  else {
                    return <p>Next player : {(this.state.xIsNext ? 'X' : 'O')}</p>
                  }
                 }
      }

      replay = () => {
            this.setState(DEFAULT_STATE)
          
      }
    
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return 
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
              }

    render() {
         let status;

        return (
         <div>
        <div className="status">{status}</div>          
             <div className = "board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>

             <div className = "board-row">     
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>

            <div className = "board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            {this.displayNul()}
         </div>


       
        );

    }
}


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
export default Board;