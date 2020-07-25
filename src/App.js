import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./components/HeaderComponent";
class App extends React.Component {
    render() {
        return (
            <>
                <HeaderComponent/>
                <div className="mt-5"></div>
            </>
        );
    }
}

export default App;