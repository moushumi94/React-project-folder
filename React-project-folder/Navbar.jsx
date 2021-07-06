import  React, { useState } from "react";
import logo1 from "../images/logo.jpg";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

function Navbar() {

    const [nav,setnav] = useState(false);
   
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        
    }else{
        setnav(false);
    }
}
 window.addEventListener("scroll", changeBackground);
    return(
   <nav className={nav ? "nav active" : "nav"}>
   <Link to ="main" className= "logo1">
         <img src={logo1} alt="" />
       </Link>
       <input type="checkbox" className="menu-btn" id="menu-btn" />
       <label className="menu-icon" for="menu-btn">
           <span className="nav-icon"></span>
       </label>
       <ul className="menu">
          <li> <NavLink exact activeClass="active" to="/" >Header</NavLink></li>
          <li> <NavLink activeClass="active" to="/Feature" >Feature</NavLink></li>
           <li> <NavLink activeClass="active" to="/About" >About</NavLink></li>
           <li> <NavLink activeclass="active" to="/Presentation">Presentation</NavLink></li>
           <li> <NavLink activeclass="active" to="/Download">Download</NavLink></li>
          <li> <NavLink activeclass="active" to="/Contact">Contact</NavLink></li>


          
       </ul>
   </nav>
  );
}

export default Navbar;