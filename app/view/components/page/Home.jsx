//This Component exports the app's Home Route 

//Import dependencies
import React from "react";

//Import utility components
import ButtonLink from "../utility/ButtonLink";

////Import scss styles
//import "./home.scss";

// Initiate Home class
export default class Home extends React.Component {
    render(){
        return (
            <div className="home-screen page">
                <span className="banner">Car maintenance can be really hectic</span>
                <span className="rider">Autowatch helps you automate vehicle servicing and car-paper renewal,
so you can have rest of mind.</span>
                <ButtonLink value="Add a New Car" type="solid" link="/add-car"/>
                <ButtonLink value="Manage your cars" type="hollow" link="/manage"/>
           
            </div>           
            
        );
    }
}