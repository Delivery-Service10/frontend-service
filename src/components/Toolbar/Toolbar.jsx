import React from "react";
import './Toolbar.scss'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const toolbar = (props,{currentUser}) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo">
                <a href="/">THE LOGO</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {
                            currentUser?(
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            ):(
                                <ul>
                                    <li>
                                        <Link to="/create-account">Create Account</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                </ul>

                            )
                        }
                    </ul>

                {/*<ul>*/}
                {/*    <li><a href="/login/">Login</a></li>*/}
                {/*    <li><a href="/create-account/">Create Account</a></li>*/}
                {/*    <li><a href="/" >Logout</a></li>*/}
                {/*</ul>*/}
            </div>
        </nav>
    </header>
);

const mapStateToProps= state=>({
    currentUser: state.user.currentUser
})

export default connect()(toolbar);