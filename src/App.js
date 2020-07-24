import React, { Component } from 'react';
import './App.css'
import CardContainer from "./component/CardContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Context</h1>
                <CardContainer/>
            </div>
        );
    }
}
export default App;

