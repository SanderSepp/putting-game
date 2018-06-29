import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AddScore from "./components/AddScore";
import TotalScore from "./components/TotalScore";
import ScoreList from "./components/ScoreList";

class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <TotalScore />
                <AddScore />
                <ScoreList />
            </div>
        );
    }
}

export default App;
