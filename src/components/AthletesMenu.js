"use strict";
import React from "react";
import {Link} from "react-router";//generate a link component from react-router to create links between views
import athletes from "../data/athletes";//get each athlete from the folder

export default class AthletesMenu extendes React.Component{
  render(){
    return(
      <nav className="athletes-menu">
        {athletes.map(menuAthlete => {
          return
            <Link key={menuAthlete.id}
              to={`/athlete/${menuAthlete.id}`}
              activeClassName="active">
                {menuAthlete.name}
            </Link>;
        })}
      </nav>
    );//create a navigation, mapping through the provided athletes and returning a link for each. return the link name but use the id as key. use <link> instead of href in react
  }//render the component
}//ES6 to create a react class component. The class flag extends the react component and is exported as default
