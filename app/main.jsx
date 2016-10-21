//This is the entry module for the app 
//it injects the "React App Component" (wrapped in the Router Component) into the appRoot element on the HTML page. 
//It Also imports the "Foundations" Core SCSS modules for styling.

//import dependencies
import React from "react";
import ReactDOM from "react-dom"
import {Router} from "react-router";
import {Route} from "react-router";
import {hashHistory} from "react-router";

//import required components
import Routes from "./view/routes";
//import App from "./view/components/App";
//import Home from "./view/components/page/Home";
//import Add from "./view/components/page/Add";
//import Manage from "./view/components/page/Manage";

//import entry module for "Foundation's" SCSS 
import "./core.scss";

//Grab the appRoot Element from the HTML
const appRoot = document.getElementById("root");

//ReactDOM.render(
//    <Router history={hashHistory}> 
//        <Route component={App}>
//            <Route path="/" component={Home}/>
//            <Route path="/add-car" component={Add}/>
//            <Route path="/manage" component= {Manage}/>
//        </Route>
//    </Router>, 
//    appRoot
//);

ReactDOM.render(
    <Router history={hashHistory}>{Routes}</Router>, appRoot
);