"use strict";
import React from "react";

const typeMap={
  "G": "Gold",
  "S": "Silver",
  "B": "Bronze"
};//add an obj with the medal types

export default class Medal extends React.Component {
  render(){
    return(
      <li className="medal">
        <span className={`symbol symbol-${this.props.type}`}
              title={typeMap[this.props.type]}>
              {this.props.type}
        </span>
        <span className="year">{this.props.year}</span>
        <span className="city"> {this.props.city}</span>
        <span className="event"> ({this.props.event})</span>
        <span className="category"> {this.props.category}</span>
      </li>
    );//add span classes with different added props. for the first span set the class to with a template string (``), setting the symbol to the according type. set the title to the according key and display the desired medal type.
  }
}//ES6 to create a react class component. The class flag extends the react component and is exported as default
