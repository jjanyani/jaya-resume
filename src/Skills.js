import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

export default function Skills() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: '100%', // Use a percentage value for responsiveness
        height: 500, // Adjust the height as needed
      },
      backgroundColor:'transparent'
    }}
  >
    
    <Paper
      elevation={24}
      style={{
        backgroundColor: '#333', // Dark background color
        color: '#fff', // Light text color
        textAlign: 'center', // Center-align text
        padding: '16px', // Add padding for better appearance
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        color="inherit"
        gutterBottom
      >
        Professional Skills
      </Typography>
    </Paper>
    </Box>
  );
}