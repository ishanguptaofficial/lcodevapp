import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import {signout, isAuthenticated} from "../auth/helper/index"


const currentTab = (history, path) => {
    if (history.location.pathname === path){
        return {color:"#2ecc72"}
    }else{
        return {color:"#ffffff"}
    }
}


const Menu = ({history, path}) => {
    return (
        <div>
        <ul className="nav nav-tabs bg-dark m-2">
            <li  className="nav-item p-2">
                <Link to="/" className="nav-link " style={currentTab(history, "/")}>Home</Link>
            </li>
            {!isAuthenticated() && (
                <Fragment>
                   
                    <li  className="nav-item p-2">
                        <Link to="/signin" className="nav-link " style={currentTab(history, "/signin")}>signin</Link>
                    </li>
                </Fragment>
            )}
            <li  className="nav-item p-2">
                <Link to="/cart" className="nav-link " style={currentTab(history, "/cart")}>Cart</Link>
            </li>
            {isAuthenticated() && (
                <li  className="nav-item p-2">
                <Link to="/user/dashboard" className="nav-link " style={currentTab(history, "/user/dashboard")}>Dashboard</Link>
            </li>
            )}
            <li  className="nav-item p-2">
                <Link to="/signup" className="nav-link " style={currentTab(history, "/signup")}>Signup</Link>
            </li>
            {isAuthenticated() && (
                <li  className="nav-item p-2">
                <span
                onClick={() => {
                    signout(() => {
                        history.push("/")
                    })
                }} 
                className="nav-link text-warning">signout</span>
            </li>
            )}
            
       </ul>
        </div>
    )
}

export default withRouter(Menu);
