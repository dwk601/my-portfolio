import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import anime from 'animejs';
import './aboutme.css';

const AboutMe = () => {
  useEffect(() => {
    const typingAnimation = () => {
      const textWrapper = document.querySelector('.aboutme-text');
      const text = textWrapper.textContent;
      textWrapper.textContent = '';
      const textArray = [...text];

      textArray.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerHTML = char;
        span.style.opacity = 0;
        textWrapper.appendChild(span);

        anime({
          targets: span,
          opacity: [0, 1],
          easing: 'linear',
          duration: 75,
          delay: 75 * index,
          complete: () => {
            if (index === textArray.length - 1) {
              setTimeout(eraseAnimation, 2000);
            }
          },
        });
      });
    };

    const eraseAnimation = () => {
      const textWrapper = document.querySelector('.aboutme-text');
      const spanElements = textWrapper.getElementsByTagName('span');
      const reversedSpanElements = Array.from(spanElements).reverse();

      reversedSpanElements.forEach((span, index) => {
        anime({
          targets: span,
          opacity: [1, 0],
          easing: 'linear',
          duration: 75,
          delay: 75 * index,
          complete: () => {
            if (index === reversedSpanElements.length - 1) {
              setTimeout(typingAnimation, 2000);
            }
          },
        });
      });
    };

    typingAnimation();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }} className="aboutme-text">
        Passionate about Data Science & Machine Learning | Computer Science Major | Full Stack Web Dev | UVU Junior
      </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Bio
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
            Highly motivated computer science student with a passion for data analytics and web programming. 
            Born in South Korea and raised in the United States, 
            I bring a unique perspective and strong work ethic to my studies. 
            With a background in soccer and a love for travel and music, 
            I strive to constantly improve and learn new things. 
            Currently pursuing a bachelor's degree in computer science at UVU, 
            I am also working on a certificate in data analytics from Google and self-taught web programming to enhance my skills and knowledge. 
            Seeking opportunities to apply my skills and make a real-world impact in the field of technology.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Avatar
              alt="Dongwook Kim"
              src="/public/Kim.png"
              sx={{ width: 300, height: 300, margin: 'auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default AboutMe;