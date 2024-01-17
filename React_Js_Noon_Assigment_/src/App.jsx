import React from "react";
import { Navbar_Components } from "./Components/Navbar_Components";
import "./App.css";
import { Slider_Component } from "./Components/Slider_Component";
import { Section_01_Component } from "./Components/Section_01_Component";
import { Section_02_Component } from "./Components/Section_02_Component";
import { Section_03_Component } from "./Components/Section_03_Component";
import { Section_04_Component } from "./Components/Section_04_Component";
import { Section_05_Component } from "./Components/Section_05_Component";
import { Section_06_Component } from "./Components/Section_06_Component";
import { Section_07_Component } from "./Components/Section_07_Component";
import { Section_08_Component } from "./Components/Section_08_Component";
import { Footer_Dection_Component } from "./Components/Footer_Dection_Component";
const App = () => {
  return (
    <div>
      <Navbar_Components />
      <Slider_Component />
      <Section_01_Component />
      <Section_02_Component />
      <Section_03_Component />
      <Section_04_Component />
      <Section_05_Component />
      <Section_06_Component />
      <Section_07_Component />
      <Section_08_Component />
      <Footer_Dection_Component />
    </div>
  );
};

export default App;
