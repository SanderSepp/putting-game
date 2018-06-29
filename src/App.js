import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InsertScore from "./components/InsertScore";
import TotalScore from "./components/TotalScore";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentScore: '',
            totalScore: 0,
        }
    }

    addScore = () => {
        this.setState({
            totalScore: parseInt(this.state.totalScore) + parseInt(this.state.currentScore),
            currentScore: '',
        });
    };

    updateScore = (e) => {
        this.setState({
            currentScore: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <NavBar/>
                <TotalScore
                    score={this.state.totalScore}
                />
                <InsertScore
                    currentScore={this.state.currentScore}
                    addScore={this.addScore}
                    updateScore={this.updateScore}
                />
            </div>
        );
    }
}

export default App;
