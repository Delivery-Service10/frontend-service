import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"
import {Switch,Route, BrowserRouter, Redirect} from 'react-router-dom'
import CreateAccountPage from "./components/pages/create-account/create-account.component";
import {LoginPage} from "./components/pages/login/login.component";
import HomePage from "./components/pages/homepage/homepage.component";
import {connect} from 'react-redux';

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
      const {currentUser} = this.props;
      let backdrop;
      if (this.state.sideDrawerOpen){
          backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
    return (
        <BrowserRouter>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}
                   currentUser={currentUser}
          />
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
          <main style={{marginTop: '56px'}}>
                  <Switch>
                      <Route exact path='/' render={HomePage}/>
                      <Route exact path='/login' render={
                          ()=>this.props.currentUser?
                              (<Redirect to='/'/>):
                              (<LoginPage/>)
                      }/>
                      <Route exact path='/create-account' render={
                          // ()=>this.props.currentUser?
                          //     (<Redirect to='/'/>):
                              (<CreateAccountPage/>)
                      }/>
                  </Switch>

          </main>
        </div>
        </BrowserRouter>
    );
  }
}
const mapStateToProps= ({user})=>({
    // currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    // setCurrentUser: user =>dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps

)(App);
