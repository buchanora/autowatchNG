import React from "react";
import {Link} from "react-router";

export default class ButtonLink extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Link to={this.props.link} className={`button-link button-${this.props.type}`} >{this.props.value}</Link>
        );
    }
}