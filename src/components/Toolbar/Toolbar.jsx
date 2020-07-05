import React from "react";
import './Toolbar.scss'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from "../../redux/user/user.actions";

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
                {
                    props.currentUser?
                        (
                            <ul>
                                <li>
                                    <Link to="/about-me">MyAccount</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>

                                </li>
                            </ul>
                        ):(
                            <ul>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/create-account">Create Account</Link>
                                </li>
                            </ul>

                        )
                }
            </div>
        </nav>
    </header>
);

const mapStateToProps= ({user})=>({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps())(toolbar);