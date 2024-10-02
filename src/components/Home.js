import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  const location = useLocation();
  const { name, age } = location.state;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography variant="h6">
          Name: {name}
        </Typography>
        <Typography variant="h6">
          Age: {age}
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
