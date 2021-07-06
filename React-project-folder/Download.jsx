import React from "react";
import dwn_image from "../images/app-landing.png";

function Download(){
    return(
        <div id="download">
           <div className="download-image">
               <img src={dwn_image} alt="" />
           </div>
           <div className="download-text">
               <h2>Download And Get The App Now</h2>
               <p>Appland is a cloud computing company headquartered in Gothenburg, Sweden, that develops white
                label app store solutions for mobile operators, mobile devices,
                online communities, smart TVs, connected vehicles and internet of things</p>
                <button>Download</button>
           </div>
        </div>
    );
}

export default Download;