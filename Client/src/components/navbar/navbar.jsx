import React from "react";
import "../../assets/css/navbar.css";
import logos from "../../assets/img/logos.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="cont">
        <img className="logos" src={logos} alt="none" />
        <nav>
          <ul>
             <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/E-chat">
            <li> E-chat</li>
          </Link>
          <Link to="/Profile">
            <li> Profile </li>
          </Link>
          <Link to="/A propos">
            <li>A propos</li>
          </Link>
          </ul>
         
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
