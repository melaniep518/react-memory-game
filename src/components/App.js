import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
    render() {

        return (
            <div>
                <h1>Memory Game</h1>
                <Board />
            </div>
        )
    }
}

export default App;