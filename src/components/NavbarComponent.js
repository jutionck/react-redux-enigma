import React, {Component} from "react";
import {Link} from "react-router-dom";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavbarComponent extends Component {
    render() {
        const { onLogout, auth } = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" hidden={!auth}>
                    <Link to={"/home"} className="navbar-brand">
                        KedaiMakan
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" disabled={!auth}>
                                <Link to={"/home"} className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/food"} className="nav-link">Foods</Link>
                            </li>
                        </ul>
                        <button type="button" onClick={() => { onLogout();}} className="btn btn-outline-dark"><FontAwesomeIcon icon={faSignOutAlt} /></button>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavbarComponent;