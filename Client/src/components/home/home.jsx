import React from "react";
import "../../assets/css/home.css";
import home from "../../assets/svg/undraw_group_hangout_re_4t8r.svg";
function Home() {
  return (
    <div className="container">
      <img className="home" src={home} />

      <div>
        

        <div>
            <h1>Bienvenu sur E-chat</h1>
          <h2>
            {" "}
            Simplifiez-Vous la vie utiliser e-chat pour communiquer avec vos
            amis et votre familles{" "}
          </h2>
          <p>Une appli 100% malgache et 100% gratuite</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
