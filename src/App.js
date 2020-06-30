import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import CreateAccountPage from "./components/pages/create-account/create-account.component";
import LoginPage from "./components/pages/login/login.component";
import HomePage from "./components/pages/homepage/homepage.component";

class App extends Component {
    state = {
        sideDrawerOpen: false

    };
  drawerToggleClickHandler = () =>{
      this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen}

      })
  };
  backdropClickHandler = () =>{
      this.setState({sideDrawerOpen:false});
  };
  render() {
      let backdrop;
      if (this.state.sideDrawerOpen){
          backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
    return (
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
          <main style={{marginTop: '56px'}}>
              <BrowserRouter>
                  <Switch>
                      <Route exact path='/' component={HomePage}/>
                      <Route exact path='/create-account' component={CreateAccountPage}/>
                      <Route exact path='/login' component={LoginPage}/>
                  </Switch>
              </BrowserRouter>
          </main>
        </div>
    );
  }
}


export default App;
