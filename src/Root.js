import React, {Component} from 'react';
import {createStore} from "redux";
import {appReducer} from "./reducers/appReducers";
import {Provider} from "react-redux";

class Root extends Component {
    render() {
        const store = createStore(appReducer);
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        );
    }
}

export default Root;