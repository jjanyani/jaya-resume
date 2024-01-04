import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function About(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        // backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:`url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 15 },
            //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height:'100%',
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              gutterBottom
            //  style={{ color: "#3B7D23" }}
            >
              {post.title}
            </Typography>
            <Typography variant="h7" gutterBottom color="inherit" paragraph  whiteSpace="pre-line" style={{ color: "#3B7D23", fontWeight: "bold", marginBottom: 50 ,textAlign:'justify'}}>
              {post.description}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              gutterBottom
             // style={{ color: "#3B7D23" }}
            >
              Strengths
            </Typography>
            <Typography variant="h7" color="inherit" paragraph  whiteSpace="pre-line" style={{ color: "#3B7D23", fontWeight: "bold" }}>
              Work ethic, Analytical, Organizational skills, Creativity, Time Management, Problem Solving, Proactive, Adabtability
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { xs: 20, md: 20},
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              height:'100%',
              width:'100%',
            }}
            
          >
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              gutterBottom
            //  style={{ color: "#3B7D23" }}
            >
              Basic Information
            </Typography>
            <Typography variant="h7" color="inherit" paragraph style={{ color: "#3B7D23", fontWeight: "bold" , marginBottom: 30}} >
              Date of Birth : 15th July, 1992
            </Typography>
            <Typography variant="h7" color="inherit" paragraph style={{ color: "#3B7D23", fontWeight: "bold" , marginBottom: 30}}>
              Sex : Female
            </Typography>
            <Typography variant="h7" color="inherit" paragraph style={{ color: "#3B7D23" , fontWeight: "bold", marginBottom: 30}}>
              Marital Status : Married
            </Typography>
            <Typography variant="h7" color="inherit" paragraph style={{ color: "#3B7D23", fontWeight: "bold" , marginBottom: 30 }}>
              Nationality : Indian
            </Typography>
            <Typography variant="h7" color="inherit" paragraph whiteSpace="break-spaces" style={{ color: "#3B7D23" , fontWeight: "bold", marginBottom: 30}}>
              Known Languages : English, Hindi, Marathi, Sindhi 
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

About.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
