import React from "react";
import "./App.css";
import Nav from "./Nav";
import SecMain from "./SecMain";
import SecAbout from "./SecAbout";
import SecOffer from "./SecOffer";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SecMain></SecMain>
      <SecAbout></SecAbout>
      <SecOffer></SecOffer>
      <Footer></Footer>
    </div>
  );
}

export default App;
