import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPageComponent from "./components/pages/login-page/login-page.component";

class App extends Component{
    render() {
        return(
            <BrowserRouter>
                <Route exact path='/login'
                       render={LoginPageComponent}
                />
            </BrowserRouter>

        )
    }
}

export default App;
