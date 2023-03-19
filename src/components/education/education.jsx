import React from 'react';
import { Typography, Box, Paper, Chip } from '@mui/material';
import './education.css';

const Education = () => {
  return (
    <Box className="education-container" sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Utah Valley University
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Major: Computer Science (BS)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Graduation Year: 2024
        </Typography>
        <Chip label="Computer Science" />
      </Paper>
    </Box>
  );
};

export default Education;
