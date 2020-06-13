import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"

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
            <p>This is the content to be added later</p>
          </main>
        </div>
    );
  }
}


export default App;
