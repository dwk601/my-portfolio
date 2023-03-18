import React from "react";
import Header from "./components/header/header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div id="about" className="section">
        <h2>About Me</h2>
        <p>This is a brief introduction about me.</p>
      </div>
      <div id="skills" className="section">
        <h2>Skills</h2>
        <p>Here, I'll list my skills and expertise.</p>
      </div>
      <div id="projects" className="section">
        <h2>Projects</h2>
        <p>This section will showcase my projects.</p>
      </div>
      <div id="experience" className="section">
        <h2>Experience</h2>
        <p>In this section, I'll share my work experience.</p>
      </div>
      <div id="education" className="section">
        <h2>Education</h2>
        <p>This section contains information about my education.</p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>Here, I'll provide my contact information.</p>
      </div>
    </>
  );
};

export default App;
