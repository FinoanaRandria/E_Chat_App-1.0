import React from "react";
import "../../assets/css/navbar.css";
import logos from "../../assets/img/logos.jpg"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        
      <div className="cont">
          <img className="logos" src={logos} alt="none"/> 
        <nav>
       
           <Link to="/home"><a>Home</a></Link>
           <Link to="/E-chat"><a> E-chat</a></Link>
           <Link to="/Profile"><a> Profile </a></Link>
           <Link to="/A propos"><a>A propos</a></Link>
          
          
          
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
