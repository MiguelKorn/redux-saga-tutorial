import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from "./containers/App";
import HomePage from "./components/HomePage";

const Router = () =>(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={HomePage}/>
        </App>
    </BrowserRouter>
);

export default Router;