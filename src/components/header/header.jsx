import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./header.css";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="header-title">
          Dongwook Kim
        </Typography>
        <Box className={isMobile ? "mobile-menu" : "desktop-menu"}>
          <Button color="inherit" onClick={() => scrollToSection("about")}>
            About Me
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("skills")}>
            Skills
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("experience")}>
            Experience
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("education")}>
            Education
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
