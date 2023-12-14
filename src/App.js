import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Hello, Material-UI!
      </Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </Container>
  );
}

export default App;