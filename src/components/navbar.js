import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "../views/Food";
class Navbar extends React.Component {
    render() {
        const styleLink = {
            color: "white",
            marginLeft: 10,
        };
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg bg-yellow">
                        <Link to={"/home"} className="navbar-brand">
                            KedaiMakan
                        </Link>
                        <div className="navbar-nav mr-auto text-dark">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/food"} className="nav-link">Foods</Link>
                            </li>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Users />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navbar;