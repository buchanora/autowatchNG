//This Component exports the app's UI and wires layout subcomponents with pages 

//Import dependency modules
import React from "react";

//Import Layout Modules
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import OffScreen from "./layout/OffScreen";

export default class App extends React.Component {
    render(){
        return (
            <div className="app-wrapper">
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>           
            
        );
    }
}

