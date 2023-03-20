import React from "react";
import Header from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Education from "./components/education/education";
import Contact from "./components/contact/contact";

import "./App.css";


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div id="about" className="animate__animated animate__fadeInLeft animate__delay-1s">
        <AboutMe />
      </div>
      <div id="skills" className="animate__animated animate__fadeInRight animate__delay-2s">
        <Skills />
      </div>
      <div id="projects" className="animate__animated animate__fadeInLeft animate__delay-3s">
        <Projects />
      </div>
      <div id="education" className="animate__animated animate__fadeInRight animate__delay-4s">
        <Education />
      </div>
      <div id="contact" className="animate__animated animate__fadeInLeft animate__delay-5s">
        <Contact />
      </div>
      {/* The rest of your sections */}
    </div>
  );
};

export default App;
