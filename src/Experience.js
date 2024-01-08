import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img5 from "./images/parallax6.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Experience() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);

  const handleKnowMoreClick = () => {
    setShowDetails(!showDetails);
  };

  const handleKnowMoreClick1 = () => {
    setShowDetails1(!showDetails1);
  };

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: { xs: "10px", sm: "20px", md: "30px" },
          backgroundColor: "rgba(0,0,0,.6)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: 30, textAlign: "center" }}
        >
          Work Experience
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ width: { xs: "100%", sm: "100%", md: "500px" } }}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Cognizant Technology Solutions
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  MEPZ, Tambaram, Chennai, TamilNadu
                </Typography>
                <Typography sx={{ mb: 1.5 , fontWeight:'bold'}} color="text.secondary">
                  10th Feb 2015 till 31st August 2016 (1.6 years)
                </Typography>
                <Typography sx={{ fontWeight: "bold" }} whiteSpace="pre-line">
                  {"Role: Programmer Analyst\n\n"}
                </Typography>

                {showDetails && (
                  <Typography sx={{ textAlign: "left", fontSize: 13 }}>
                    <strong>Roles and Responsibilities:</strong>
                    <ul>
                      <li>
                        Certified in .NET Technology and SQL through rigorous
                        training, earning the title of Programmer Analyst for
                        the WALMART project after successful completion of
                        training exams.
                      </li>
                      <li>Worked as a developer in a team.</li>
                      <li>
                        Did Analysis, development and testing of code for new
                        requirements.
                      </li>
                      <li>
                        Handled database related activities including data setup
                        needed for test cases.
                      </li>
                      <li>
                        Analysis of defects found in production and fixing the
                        defects.
                      </li>
                      <li>
                        Attended daily calls with onsite team for clarification
                        of queries and updates on daily tasks.
                      </li>
                      <li>
                        Nominated and Proud Recipient of the 'Delivery
                        Excellence
                      </li>
                    </ul>
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{ color: "#3B7D23", fontWeight: "bold" }}
                  onClick={handleKnowMoreClick}
                >
                  {showDetails ? "Hide Details" : "Know More"}
                </Button>
              </CardActions>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <Card sx={{ width: { xs: "100%", sm: "100%", md: "500px" } }}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  WMD Services India Private Limited
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  MJ Nagar, Hosapete, Karnataka
                </Typography>
                <Typography sx={{ mb: 1.5, fontWeight:'bold' }} color="text.secondary">
                  1st April 2017 till date (7 years)
                </Typography>
                <Typography sx={{ fontWeight: "bold" }} whiteSpace="pre-line">
                  {"Role: Senior Technical Consultant(.Net Developer)\n\n"}
                </Typography>

                {showDetails1 && (
                  <Typography sx={{ textAlign: "left", fontSize: 13  }}>
                    <strong>Roles and Responsibilities:</strong>
                    <ul>
                      <li>
                        Installed and customized xFlow software globally on
                        clients' servers.
                      </li>
                      <li>
                        Maintained and optimized the OCR engine, resolving bugs
                        promptly.
                      </li>
                      <li>
                        Analyzed, developed, and tested new features for xFlow
                        tools.
                      </li>
                      <li>
                        Created a Web Service-based monitoring website using
                        HTML, CSS, JavaScript, and ASP.Net.
                      </li>
                      <li>
                        Managed support tickets, addressing customer-reported
                        issues with xFlow Capture tools.
                      </li>
                      <li>
                        Trained in ECM tools and Archive Server setups, applying
                        knowledge to benefit clients.
                      </li>
                      <li>
                        Traveled to Singapore for on-site learning experiences.
                      </li>
                      <li>
                        Successfully managed multiple global clients,
                        prioritizing tasks for optimal results.
                      </li>
                      <li>
                        Produced comprehensive technical documentation, reviewed
                        data, and provided solutions for process optimization.
                      </li>
                      <li>Reviewed and adjusted custom-developed code.</li>
                      <li>
                        Currently working on React JS website for Invoice
                        process automation which connects MongoDB database and
                        SAP ERP system along with windows-based xFlow software
                        installations and customization for clients.
                      </li>
                    </ul>
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{ color: "#3B7D23", fontWeight: "bold" }}
                  onClick={handleKnowMoreClick1}
                >
                  {showDetails1 ? "Hide Details" : "Know More"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more Grid items as needed */}
        </Grid>
      </Box>
    </Paper>
  );
}

export default Experience;
