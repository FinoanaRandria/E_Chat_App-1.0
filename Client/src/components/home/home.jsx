import React,{useEffect,useRef} from "react";
import "../../assets/css/home.css";
import home2 from "../../assets/img/icon.jpg"
import home from "../../assets/svg/undraw_chatting_re_j55r.svg";
import backgrounds from "../../assets/svg/wave.svg"
import git from "../../assets/ico/git.ico"
import Lottie from "lottie-web"
function Home() {
   
    
      const container = useRef(null)
      useEffect(()=>{
        Lottie.loadAnimation({
          container:container.current,
          renderer:'svg',
          loop:true,
        /* misy npm installena  */
        })
      },[])  


  return (
    <div>
      <div className="container" >
        <img className="home" src={home} />
        <div>
          <div className="">
            <h1 className="ani" data-text="Bienvenu sur E-chat">Bienvenu sur E-chat <img className="home2" src={home2} /> </h1>
            <h2>
              {" "}
              Simplifiez-Vous la vie utiliser e-chat pour communiquer avec vos
              amis et votre familles{" "}
            </h2>
            <p>Une appli 100% malgache et 100% gratuite</p>
             <br/>
             <h6> @Project github finoana randria <img src={git} className="icons"/> </h6>
          </div>
        </div>
      </div>
        <img src={backgrounds} className="backgrounds"/>
    </div>
  );
}

export default Home;
