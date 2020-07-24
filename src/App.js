import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
class App extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
            </>
        );
    }
}

export default App;