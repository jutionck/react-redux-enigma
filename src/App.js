import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import HeaderComponent from "./components/HeaderComponent";
class App extends React.Component {
    render() {
        return (
            <>
                <HeaderComponent/>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="responsive">

                            </div>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </>
        );
    }
}

export default App;