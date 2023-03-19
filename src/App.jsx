import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Education from "./components/education/education";
import Contact from "./components/contact/contact";
import "./App.css";
import anime from "animejs";

const animateOnScroll = (scrollDirection) => {
  const sections = document.querySelectorAll(".scroll-animation");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const animationDirection = section.dataset.direction;
    const isAnimated = section.dataset.animated === "true";

    if (
      sectionTop <= windowHeight * 0.75 &&
      scrollDirection === "down" &&
      !isAnimated
    ) {
      anime({
        targets: section,
        translateX:
          animationDirection === "left" ? ["-100%", "0%"] : ["100%", "0%"],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 3000,
        complete: () => {
          section.dataset.animated = "true";
        },
      });
    }
  });
};


const App = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
      setLastScrollTop(scrollTop);
      animateOnScroll(scrollDirection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="app-container">
      <Header />
      <div id="about" className="scroll-animation" data-direction="left">
        <AboutMe />
      </div>
      <div id="skills" className="scroll-animation" data-direction="right">
        <Skills />
      </div>
      <div id="projects" className="scroll-animation" data-direction="left">
        <Projects />
      </div>
      <div id="education" className="scroll-animation" data-direction="right">
        <Education />
      </div>
      <div id="contact" className="scroll-animation" data-direction="left">
        <Contact />
      </div>
      {/* The rest of your sections */}
    </div>
  );
};

export default App;
