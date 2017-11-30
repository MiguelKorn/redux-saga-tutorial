import React, {Component} from 'react';
import Header from '../common/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import MediaGalleryPage from "./MediaGalleryPage";
import CounterContainer from "./CounterContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid text-center">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/library/:search?" component={MediaGalleryPage}/>
                        <Route path="/counter" component={CounterContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
