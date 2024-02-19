import "./App.css";
import React from "react";
import LandingPage from "./components/aboutus_mai";
import NavBar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import TastingDay from "./components/TastingDay";

function App() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <TastingDay />
    </div>
  );
}

export default App;
