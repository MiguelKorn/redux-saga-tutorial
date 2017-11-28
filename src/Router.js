import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./containers/App";
import HomePage from "./components/HomePage";
import MediaGalleryPage from "./containers/MediaGalleryPage";

const Router = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/library" component={MediaGalleryPage}/>
            </Switch>
        </App>
    </BrowserRouter>
);

export default Router;