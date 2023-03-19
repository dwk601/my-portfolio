import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import './contact.css';

const Contact = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-container">
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Contact
      </Typography>
        <Typography sx={{ marginBottom: 2 }}>
            <a href="mailto:kdoim100@gmail.com" style={{ color: '#736fe7' }}>kdoim100@gmail.com</a>
        </Typography>
      <Box>
        <IconButton href="https://www.linkedin.com/in/dongwook-kim-35527b1b2/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://github.com/dwk601" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
