import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Router from "./Router";
import configureStore from "./store/configureStore";

// init store
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
);