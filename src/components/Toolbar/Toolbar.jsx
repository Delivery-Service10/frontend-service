import React from "react";
import './Toolbar.scss'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
// import {Link} from 'react-router-dom'

const toolbar = props => (
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
                    <li><a href="/">Login</a></li>
                    <li><a href="/create-account">Create Account</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;