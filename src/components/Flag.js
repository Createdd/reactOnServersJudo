//Create the flag component
"use strict";
import React from "react";//ES6 import of a module

const data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  }
};//array with flag objects

export default class Flag extends React.Component {
  render(){
    const name=data[this.props.code].name;//create a variable that add the props "code"
    const icon=data[this.props.code].icon;//create a variable that add the props "code"
    return(
      <span className="flag">
        <img className="icon" title={name} src={"/img/${icon}"}/>
        {this.props.showName && <span className="name">{name}</span>}
      </span>
    );//create the html an image as icon and adding the prop showname displaying the name
  }
}//ES6 to create a react class component. The class flag extends the react component and is exported as default
