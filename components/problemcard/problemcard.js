import React, { Component } from 'react';

import './problemcard.css';

class problemcard extends Component{
    render(){
        return(
            <div className="problemcard">
               <p>{this.props.title}</p>
               <p>{this.props.date}</p>
            </div>
        )
    }
}

export default problemcard;