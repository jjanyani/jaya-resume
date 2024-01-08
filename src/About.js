import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

function About(props) {
  const { post } = props;

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
        backgroundImage: `url(${post.image})`,
      }}
    >
      <Container sx={{ py: 8 }} maxWidth="xl">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item key={1} xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="white"
                  gutterBottom
                  style={{
                    borderBottom: "5px solid #3B7D23",
                    borderRadius: "5px",
                    width: "70%",
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="h7"
                  gutterBottom
                  color="white"
                  paragraph
                  whiteSpace="pre-line"
                  style={{
                    fontWeight: "bold",
                    marginBottom: 50,
                    textAlign: "justify",
                  }}
                >
                  {post.description}
                </Typography>
                <Typography
                  component="h1"
                  variant="h4"
                  color="white"
                  gutterBottom
                  style={{
                    borderBottom: "5px solid #3B7D23",
                    borderRadius: "5px",
                    width: "70%",
                  }}
                >
                  Strengths
                </Typography>
                <Typography
                  variant="h7"
                  color="white"
                  paragraph
                  whiteSpace="pre-line"
                  style={{ fontWeight: "bold" }}
                >
                  Work ethic, Analytical, Organizational skills, Creativity,
                  Time Management, Problem Solving, Proactive, Adabtability
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item key={2} xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="white"
                  gutterBottom
                  style={{
                    borderBottom: "5px solid #3B7D23",
                    borderRadius: "5px",
                    width: "70%",
                  }}
                >
                  Basic Information
                </Typography>
                <Typography
                  variant="h7"
                  color="white"
                  paragraph
                  style={{ fontWeight: "bold", marginBottom: 30 }}
                >
                  Date of Birth : 15th July, 1992
                </Typography>
                <Typography
                  variant="h7"
                  color="white"
                  paragraph
                  style={{ fontWeight: "bold", marginBottom: 30 }}
                >
                  Sex : Female
                </Typography>
                <Typography
                  variant="h7"
                  color="white"
                  paragraph
                  style={{ fontWeight: "bold", marginBottom: 30 }}
                >
                  Marital Status : Married
                </Typography>
                <Typography
                  variant="h7"
                  color="white"
                  paragraph
                  style={{ fontWeight: "bold", marginBottom: 30 }}
                >
                  Nationality : Indian
                </Typography>
                <Typography
                  variant="h7"
                  color="white"
                  paragraph
                  whiteSpace="break-spaces"
                  style={{ fontWeight: "bold", marginBottom: 30 }}
                >
                  Known Languages : English, Hindi, Marathi, Sindhi
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
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
