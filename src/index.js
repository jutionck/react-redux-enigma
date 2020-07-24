import React from 'react';
import './index.css';
import App from './App';
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {store} from '../src/redux/store-config/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <BrowserRouter>
        <Root>
            <App />
        </Root>
    </BrowserRouter>,
    document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
