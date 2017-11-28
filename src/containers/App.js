import React from 'react';
import Header from '../common/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import MediaGalleryPage from "./MediaGalleryPage";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid text-center">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/library" component={MediaGalleryPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
