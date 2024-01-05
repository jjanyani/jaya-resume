import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img5 from "./images/parallax5.jpg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
 

  
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${img5})`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
          backgroundColor: "rgba(0,0,0,.8)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: 30, textAlign: "center" }}
        >
          Education
        </Typography>

        <Timeline position="alternate">
     
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.primary"
        >
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            2008
          </Typography>
          <Typography  style={{
                color:'#3B7D23',
              }}>10th Grade from Pune Board, Little Flower Convent High School, Solapur, with 81.38%</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            2010
          </Typography>
          <Typography style={{
                color:'#3B7D23',
              }}>12th Grade from Pune Board, Walchand College of Arts & Science, Solapur, with 79.50%</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            2014
          </Typography>
          <Typography style={{
                color:'#3B7D23',
              }}>Bachelor's Degree in Information Technoloy from Solapur University, Walchand Institute of Technology, Solapur, with 79.50%</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        
      </Box>
    </Paper>
  );
}

export default Education;
