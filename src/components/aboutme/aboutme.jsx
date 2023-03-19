import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import './aboutme.css';

const AboutMe = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Bio
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          <p>Passionate about Data Science & Machine Learning | Computer Science Major | Full Stack Web Dev | UVU Junior</p>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Avatar
            alt="Dongwook Kim"
            src="/src/assets/Kim.png"
            sx={{ width: 300, height: 300, margin: 'auto' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
