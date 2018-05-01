import React, { Component } from 'react';
import _ from 'lodash';
import { Card } from './Card';

export default class Board extends Component {
  constructor() {
    super() 
    this.generateBoard = this.generateBoard.bind(this)
    this.loadBoard = this.loadBoard.bind(this)
    this.state = {
      pieces: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }


  generateBoard() {
    let boardSize = 4;
    let boardArray = [];
    const pairs = [...this.state.pieces, ...this.state.pieces];
    const shuffledPairs =  _.shuffle(pairs);
    console.log(shuffledPairs)
    for(let row = 0; row < boardSize; row++) {
      boardArray[row] = [];
      for(let square = 0; square < boardSize; square++) {
        boardArray[row].push(shuffledPairs[0])
        shuffledPairs.splice(0, 1)
      }
    }
    return boardArray;
  }

  loadBoard() {
    
  }

  render() {
    console.log(this.generateBoard())
    return (
      <div>
        <h5>This Will be the board Component</h5>
        <Card face={this.state.pieces[0]}/>
      </div>
    )
  }
}