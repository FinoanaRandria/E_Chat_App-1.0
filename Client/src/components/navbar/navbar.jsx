import React from "react";
import "../../assets/css/navbar.css";
import logos from "../../assets/img/logos.jpg"
function Navbar() {
  return (
    <div>
      <div>
          <img className="logos" src={logos} alt="none"/> 
        <nav>
          <a href="home">Home</a>
          <a href="App"> E-chat</a>
          <a href="Profile"> Profile </a>
          <a href="A propos">A propos</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
