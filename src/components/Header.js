import logo from "../images/logo.png"
import { useState } from "react";

const Header=()=>{
  const [btnName, setBtnName] = useState("Login");
  
  const handleClick = () => {
    setBtnName("LogOut");

  }
  const handlePress = () => {
    setBtnName("Login");
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <button className="login-but" onClick={()=>{
          btnName==="Login"?handleClick():handlePress();
          
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Header;