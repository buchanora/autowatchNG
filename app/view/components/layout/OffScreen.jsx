//This Component exports the app's Off Screen Component 

//Import dependencies
import React from "react";

//Import utility components

//Import scss styles
//import "./header.scss";

// Initiate OffScreen class
export default class OffScreen extends React.Component {
    render(){
        return (
            <div className="off-screen">
                <ul>
                    <li>
                        <a href="">Car Tips</a>
                    </li>
                    <li>
                        <a href="">DIY Guide</a>
                    </li>
                    <li>
                        <a href="">Find Verified Mecahnics</a>
                    </li>
                    <li>
                        <a href=""> Auto Renewals</a>
                    </li>
                </ul>
            </div>           
            
        );
    }
}