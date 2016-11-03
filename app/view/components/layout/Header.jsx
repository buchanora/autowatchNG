//This Component exports the app's Header

//Import dependencies
import React from "react";

//Import utility components

////Import scss styles
//import "./header.scss";

// Initiate Header class
export default class Header extends React.Component {
    render(){
        return (
            <div className="header wrapper">
                <ul className="social-bar">
                    <li>
                        <a href="">
                            <i className="fa fa-facebook fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" >
                            <i className="fa fa-twitter fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-instagram fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-envelope fa-2x"></i>
                        </a>
                    </li>
                </ul>
                <div className="header-logo-container">
                    <img className="header-logo" src="img/autowatch-logo@1x.png" alt="AutoWatch Logo"/>
                </div>
                <div className="header-right">
                    <img className="menu-icon" src="img/menu-icon.png" alt="menu-icon"/>
                </div>
                
            </div>           
            
        );
    }
}