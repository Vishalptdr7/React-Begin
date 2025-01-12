import {logo} from "../../images/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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