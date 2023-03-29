import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import './projects.css';

const Project = ({ title, description, technologies, link }) => (
  <Card className="project-card">
    <CardContent className="project-card-content">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" className="project-description">{description}</Typography>
      <Typography variant="body1" className="project-technologies">{technologies}</Typography>
    </CardContent>
    <Box className="project-link-container">
      <Button href={link} target="_blank" rel="noopener noreferrer" variant="outlined" className="project-link">View the Project</Button>
    </Box>
  </Card>
);

const Projects = () => {
  const projectList = [
    {
      title: 'Gptchat',
      description: 'A chatbot using the OpenAI API to generate answers. This full-stack web application is built using the Django framework and includes user authentication functionality.',
      technologies: 'Django, OpenAI API, User Authentication',
      link: 'https://github.com/dwk601/Gptchat',
    },
    {
      title: 'BuliishBet',
      description: 'BullishBet is a Python bot that predicts the future price of a stock using data from Reddit',
      technologies: 'Flask, Python, scikit-learn, Machine Learning, APIs, Bootstrap',
      link: 'https://bullish-bet.herokuapp.com/',
    },
    {
      title: 'Spotify Playlist Project',
      description: 'As a data engineering role at UVU Data Science Club, I am building a pipeline for the project with Python and Jupyter Notebooks.',
      technologies: 'Python, Jupyter Notebooks, Pandas',
      link: 'https://github.com/datascienceclubUVU/UVU-2022-2023',
    },
    {
      title: 'My Portfolio',
      description: 'My portfolio website built using Vite and React to create a responsive web app.',
      technologies: 'Vite, React, Material-UI',
      link: 'https://github.com/dwk601/my-portfolio',
    },
  ];

  return (
    <Box className="projects-container">
      <Typography variant="h4" className="projects-heading">Projects</Typography>
      <Grid container spacing={4}>
        {projectList.map((project) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Project
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
