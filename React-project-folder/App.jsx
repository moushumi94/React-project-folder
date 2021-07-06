import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Download from "./Components/Download";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";


function App() {
  return(
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/Feature" component={Feature} />
      <Route path="/About" component={About} />
      <Route path="/Presentation" component={Presentation} />
      <Route path="/Download" component={Download} />
      <Route path="/Contact" component={Contact} />
    </Switch>
    </>
  );
}

export default App;