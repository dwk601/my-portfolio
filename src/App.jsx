import React from "react";
import Header from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* The rest of your sections */}
    </div>
  );
};

export default App;
