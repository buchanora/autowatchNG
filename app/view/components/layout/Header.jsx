//This Component exports the app's Header

//Import dependencies
import React from "react";

//Import utility components

//Import scss styles

// Initiate Header class
export default class Header extends React.Component {
    render(){
        return (
            <div className="header wrapper">
                <ul className="social-bar">
                    <li>
                        <a href="" herf="">
                            <i>Facebook</i>
                        </a>
                    </li>
                    <li>
                        <a href="" herf="">
                            <i>Twitter</i>
                        </a>
                    </li>
                    <li>
                        <a href="" herf="">
                            <i>Instagram</i>
                        </a>
                    </li>
                    <li>
                        <a href="" herf="">
                            <i>Email</i>
                        </a>
                    </li>
                </ul>
                <div className="header-logo-container">
                    <img className="header-logo" src="img/autowatch-logo-white@1x.png" alt="AutoWatch Logo"/>
                </div>
                
            </div>           
            
        );
    }
}