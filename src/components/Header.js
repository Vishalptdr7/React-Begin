import {logo} from "../../images/logo.png"
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header=()=>{
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const handleClick = () => {
    setBtnName("LogOut");
  }
  const userName = localStorage.getItem("userName");
  const {loggedInUser}=useContext(UserContext); 
  console.log();

  const handlePress = () => {
    setBtnName("Login");
  }
  return (
    <div className="flex justify-between items-center p-2.5 border border-gray-300  bg-pink-100 shadow-md sticky top-0 z-50">
      {" "}
      <div className="logo-container">
        <Link to="/">
        
          <img
            className="w-30 h-36 flex mx-auto py-2.5 cursor-pointer "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDwnOKl41cCXsIRaX8_KTXTWjYXdC6dUmXQ&s"
          ></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex items-center list-none m-0 p-0 text-xs">
          <li className="px-5 py-2 mr-4 relative transition-colors duration-300">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-5 py-2 mr-4 relative transition-colors duration-300">
            <Link
              className="no-underline text-gray-800 font-medium hover:text-blue-500 hover:underline"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="px-5 py-2 mr-4 relative transition-colors duration-300">
            <Link
              className="no-underline text-gray-800 font-medium hover:text-blue-500 hover:underline"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="px-5 py-2 mr-4 relative transition-colors duration-300">
            <Link
              className="no-underline text-gray-800 font-medium hover:text-blue-500 hover:underline"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="px-5 py-2 mr-4 relative transition-colors duration-300">
            <Link
              className="no-underline text-gray-800 font-medium hover:text-blue-500 hover:underline"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="px-5 py-2 mr-4 relative transition-colors duration-300">
            <Link
              className="no-underline text-gray-800 font-medium hover:text-blue-500 hover:underline"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <Link to="/signup">
            <button
              className="login-but py-2 cursor-pointer"
              onClick={() => {
                btnName === "Login" ? handleClick() : handlePress();
              }}
            >
              {btnName}
            </button>
            
          </Link>
          <li>
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;