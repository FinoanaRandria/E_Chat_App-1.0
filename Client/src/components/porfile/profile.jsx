import React from "react";
import "../../assets/css/profile.css";
import im2 from "../../assets/svg/pattern.svg"
import im3 from "../../assets/svg/user.svg"
function Profile() {
  return (
    <div>
      <div className="content">
        <h2>Profile</h2>
        <h2>Profile</h2>
      </div>

       <div className="users">

         <img src={im2} className="patterns" width={800} alt="pattern"/>
         <img src={im3} className="pdp" width={100} alt="users"/>
             <div className="infoUsers">
                <h1>Users</h1>
             </div>
       </div>
    </div>
  );
}

export default Profile;
