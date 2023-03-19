import React from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';
import './skills.css';

const SkillBar = ({ skill, level }) => (
  <Box className="skill-bar">
    <Typography variant="body1">{skill}</Typography>
    <LinearProgress variant="determinate" value={level} />
  </Box>
);

const Skills = () => {
  const techSkills = [
    { skill: 'Python', level: 80 },
    { skill: 'Django', level: 60 },
    { skill: 'SQL', level: 50 },
    { skill: 'R', level: 50 },
    { skill: 'JavaScript', level: 70 },
    { skill: 'React', level: 60 },
    { skill: 'HTML', level: 80 },
    { skill: 'CSS', level: 70 },
    { skill: 'Git', level: 60 },
  ];

  const softSkills = [
    { skill: 'Time Management', level: 100 },
    { skill: 'Emotional Intelligence', level: 80 },
    { skill: 'Communication', level: 70 },
    { skill: 'Teamwork', level: 80 },
    { skill: 'Leadership', level: 70 },
    { skill: 'Problem Solving', level: 80 },
    { skill: 'Creativity', level: 70 },
  ];

  return (
    <Box className="skills-container">
      <Typography variant="h4">Tech Skills</Typography>
      {techSkills.map((skill) => (
        <SkillBar key={skill.skill} skill={skill.skill} level={skill.level} />
      ))}
      <Typography variant="h4">Soft Skills</Typography>
      {softSkills.map((skill) => (
        <SkillBar key={skill.skill} skill={skill.skill} level={skill.level} />
      ))}
    </Box>
  );
};

export default Skills;
