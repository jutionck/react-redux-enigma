import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, withRouter, Switch, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
import UserContainer from "../page/users/UserContainer";
import LoginContainer from "../page/auth/LoginContainer";
import NavbarComponent from "./NavbarComponent";
import NotFound from "../page/404/NotFound";
import FoodContainer from "../page/foods/FoodContainer";

const routes = [
    { id: 1, path:"/home", component: HomePage },
    { id: 2, path:"/user", component: UserContainer },
    { id: 3, path:"/food", component: FoodContainer },
    { id: 4, path:"/food/add", component: FoodContainer },
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
            console.log(sessionStorage.getItem("auth-token"));
            // this.props.history.push({ pathname: this.props.location.pathname });
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
                <div className="container mt-3">
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => {
                                return (
                                    <LoginContainer {...props} onLogin={this.onLogin} />
                                );
                            }}
                        />
                        {routeList}
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
                {/*<FooterComponent auth={this.state.auth}/>*/}
            </div>
        );
    }
}

export default withRouter(HeaderComponent);