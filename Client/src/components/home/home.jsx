import React, { useEffect, useRef } from "react";
import "../../assets/css/home.css";
import home2 from "../../assets/img/icon.jpg";
import home from "../../assets/img/113330-iphone.gif";
import backgrounds from "../../assets/svg/wave.svg";
import git from "../../assets/ico/git.ico";
import Lottie from "lottie-web";
import {motion as m} from "framer-motion"
function Home() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      /* misy npm installena ray */
    });
  }, []);

  return (
    <m.div
      initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.75,ease:"easeOut"}}
        exit={{opacity: 0}}
    >
        
      <div className="container">
        <img className="home" src={home} />
        <div>
          <div className="consta">
            <div className="content">
              <h2>Bienvenu </h2>
              <h2>Bienvenu </h2>   
            </div>
            
          </div>
            <div className="suite">
            <h2>
              {" "}
              Simplifiez-Vous la vie utiliser e-chat pour communiquer avec vos
              amis et votre familles{" "}
            </h2>
            <p>Une appli 100% Malagasy et 100% Gratuite</p>
            <br />
            <h6>
              {" "}
              @Project github finoana randria{" "}
              <img src={git} className="icons" />{" "}
            </h6>
              
            </div>
        </div>
      </div>
      <img src={backgrounds} className="backgrounds" />
    </m.div>
  );
}

export default Home;
