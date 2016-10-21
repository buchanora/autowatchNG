//This is a wrapper component that wires up the app's routes using "React Router"

//Import dependencies
import React from "react";
import {Route} from "react-router";
import {indexRoute} from "react-router";

//Import Layout and content-rendering components
import App from "./components/App";
import Home from "./components/page/Home";
import Add from "./components/page/Add";
import Manage from "./components/page/Manage";

export default (
    <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/add-car" component={Add}/>
        <Route path="/manage" component= {Manage}/>
    </Route>
);