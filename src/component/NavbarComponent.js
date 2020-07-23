import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavbarComponent extends Component {
    render() {
        const { onLogout, auth } = this.props;
        return (
            <nav className="navbar navbar-expand-lg bg-yellow" hidden={!auth}>
                <div className="container">
                    <Link to={"/home"} className="navbar-brand">
                        KedaiMakan
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item" disabled={!auth}>
                            <Link to={"/home"} className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/food"} className="nav-link">Foods</Link>
                        </li>
                    </div>
                    <button type="button" onClick={() => { onLogout();}} className="btn btn-outline-dark"><FontAwesomeIcon icon={faSignOutAlt} /></button>
                </div>
            </nav>
        )
    }

}

export default NavbarComponent;