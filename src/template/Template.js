import React, {Component} from 'react';
import '../assets/css/sb-admin-2.min.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import {Redirect, withRouter, Switch, Route, Link} from "react-router-dom";
import HomePage from "../views/HomePage";
import Food from "../views/food/Food";
import User from "../views/user/User";
import LoginContainer from "../views/auth/LoginContainer";
import NotFound from "../views/404/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBurn, faHome, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";

const routes = [
    { id: 1, path:"/home", component: HomePage },
    { id: 2, path:"/food", component: Food },
    { id: 3, path:"/user", component: User },
];

class Template extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: false,
        };
    }
    onLogin = () => {
        this.setState({ ...this.state, auth: true });
        this.props.history.push({ pathname: "/home" });
    };

    onLogout = () => {
        sessionStorage.clear();
        this.setState({
            auth: false,
        });
    };
    componentDidMount() {
        if (sessionStorage.getItem("auth-token") !== null) {
            this.setState({ ...this.state, auth: true });
            this.props.history.push({ pathname: "/home" });
        } else {
            this.setState({ ...this.state, auth: false });
        }
    }

    render() {
        const routeList = routes.map((route) => {
            return (
                <Route
                    key={route.id}
                    path={route.path}
                    render={
                        (props) => {
                            return this.state.auth ? <route.component {...props}/> : <Redirect to='/'/>
                        }
                    }/>
            );
        });

        return (
            <>
                <div id="wrapper">
                    <ul hidden={!this.state.auth} className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Link to={"/home"} className="sidebar-brand d-flex align-items-center justify-content-center">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">KedaiMakan</div>
                        </Link>
                        <hr className="sidebar-divider my-0"/>
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link" >
                                <FontAwesomeIcon icon={faHome}/> <span>Dashboard</span>
                            </Link>
                        </li>
                        <hr className="sidebar-divider"/>
                        <div className="sidebar-heading">
                            Main Menu
                        </div>
                        <li className="nav-item">
                            <Link to={"/food"} className="nav-link">
                                <FontAwesomeIcon icon={faBurn}/> <span>Foods</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">
                                <FontAwesomeIcon icon={faUser}/> <span>user</span>
                            </Link>
                        </li>
                        <hr className="sidebar-divider d-none d-md-block"/>
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle"></button>
                        </div>
                    </ul>

                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <ul class="navbar-nav ml-auto" hidden={!this.state.auth}>
                                    <div class="topbar-divider d-none d-sm-block"></div>
                                    <li class="nav-item dropdown no-arrow">
                                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">User</span>
                                            <img class="img-profile rounded-circle"
                                                 src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                             aria-labelledby="userDropdown">
                                            <a class="dropdown-item" onClick={this.onLogout} >
                                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div class="container-fluid">
                                <Switch>
                                    <Route
                                        path="/"
                                        exact
                                        render={props => {
                                            return (
                                                <LoginContainer {...props} onLogin={this.onLogin} />
                                            );
                                        }}
                                    />
                                    {routeList}
                                    <Route path="*">
                                        <NotFound />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        <footer hidden={!this.state.auth} class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
                                    <span>Copyright &copy; Make With Bootstrap 2020</span>
                                </div>
                            </div>
                        </footer>
                    </div>

                </div>

            </>
        );
    }
}

export default withRouter(Template);