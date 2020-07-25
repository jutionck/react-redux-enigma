import React, {Component} from 'react';
import { Redirect, withRouter, Switch, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import Food from "../views/food/Food";
import NavbarComponent from "./NavbarComponent";
import LoginContainer from "../views/auth/LoginContainer";
import NotFound from "../views/404/NotFound";
import FooterComponent from "./FooterComponent";
import User from "../views/user/User";

const routes = [
    { id: 1, path:"/home", component: HomePage },
    { id: 2, path:"/food", component: Food },
    { id: 3, path:"/user", component: User },
];


class HeaderComponent extends Component {

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
            <div>
                <NavbarComponent onLogout={this.onLogout} auth={this.state.auth}/>
                <div className="container mt-4">
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
                <FooterComponent auth={this.state.auth}/>
            </div>
        );
    }
}

export default withRouter(HeaderComponent);