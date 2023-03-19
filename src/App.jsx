import React from "react";
import Header from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div id="about">
        <AboutMe />
      </div>
      {/* The rest of your sections */}
    </>
  );
};

export default App;