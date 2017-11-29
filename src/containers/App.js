import React from 'react';
import Header from '../common/Header';
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import MediaGalleryPage from "./MediaGalleryPage";
import CounterContainer from "./CounterContainer";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid text-center">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/library/:search" component={withRouter(MediaGalleryPage)}/>
                        <Route path="/counter" component={CounterContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
