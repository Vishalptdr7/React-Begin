import {janki} from "../../images/janki.jpg"
import {vishal} from "../../images/vishal.jpg"
import UserClass from "./UserClass.js";
import User from "./User.js";
import React from "react";


export class About extends React.Component {
  constructor(props){
    super(props)
  }
  render()
 { return (
    <div>
     
      <UserClass name={"Ankit Yadav"} location={"Biora"} email={"ankityadav@gmail.com" } title={"CEO & Founder"} />
     
    </div>
  );}
};