import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoutes from './auth/helper/PrivateRoutes';
import Home from "./core/Home";
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import UserDashboard from './user/UserDashboard';
import Cart from './core/Cart';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/cart" exact component={Cart} />
                <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;