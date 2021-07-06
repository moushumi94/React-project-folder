import React from "react";
import aboutimage from "../images/app-landing2.jpg";
function About(){
    return(
        <div id="about">
           <div className="about-image">
               <img src={aboutimage} alt="" />
           </div>
           <div className="about-text">
               <h2>Comes With All You Need For Daily Life</h2>
               <p>Appland is a cloud computing company headquartered in Gothenburg, Sweden, that develops white
                label app store solutions for mobile operators, mobile devices,
                online communities, smart TVs, connected vehicles and internet of things</p>
                <button>Get the App</button>
           </div>
        </div>
    );
}

export default About;