import React from "react";


function FeatureBox(props) {
  return(
    <div className="a-box">
     <div className="a-b-img">
           <img src={props.image} />
     </div>
     <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>The Montserrat Project began<br /> with the idea to rescue .</p>
     </div>
    </div>
  
 
  
  );
}

export default FeatureBox;