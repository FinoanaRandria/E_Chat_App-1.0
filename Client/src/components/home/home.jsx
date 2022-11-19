import React from "react";
import "../../assets/css/home.css";
import home2 from "../../assets/img/icon.jpg"
import home from "../../assets/svg/undraw_group_hangout_re_4t8r.svg";
function Home() {
  return (
    <div>
      <div className="container">
        <img className="home" src={home} />
        <div>
          <div>
            <h1>Bienvenu sur E-chat <img className="home2" src={home2} /> </h1>
            <h2>
              {" "}
              Simplifiez-Vous la vie utiliser e-chat pour communiquer avec vos
              amis et votre familles{" "}
            </h2>
            <p>Une appli 100% malgache et 100% gratuite</p>
             <br/>
             <h6> @Project github finoana randria</h6>
          </div>
        </div>
      </div>
        <div className="container2">
             
        </div>
    </div>
  );
}

export default Home;
