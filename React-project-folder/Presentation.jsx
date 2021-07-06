import React from "react";
import presentimage from "../images/presentation.png";

function Presentation(){
    return(
        <div id="presentation">
        <div className="presentation-text">
            <h1>UI Presentation</h1>
            <p> Our Expertise Mobile VAS, Value Added Services, MVAS, app distribution, app discovery & app platform</p>
           </div> 
           <div className="presentation-image">
               <img src={presentimage} alt="" />
           </div>
           <button>Explore</button>
        </div>
    );
}

export default Presentation;