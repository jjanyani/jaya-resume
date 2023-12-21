import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Parallax } from "react-parallax";
import CssBaseline from "@mui/material/CssBaseline";
import img3 from "./images/parallax1.jpg";
import img1 from "./images/JJ.png";
import img2 from "./images/Jaya.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import "./css/rippleanimation.css";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function App() {
  const [appBarColor, setAppBarColor] = useState("transparent");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const defaultTheme = createTheme();
  const theme = useTheme();

  useEffect(() => {
    document.title = "Jaya Janyani Resume";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 150; // Adjust this value as needed

      if (scrollPosition > threshold) {
        setAppBarColor("black"); // Change to your desired background color
      } else {
        setAppBarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const pages = ["About", "Skills", "Portfolio", "Experience", "Contact"];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#3B7D23",
    "&:hover": {
      backgroundColor: "#3B7D23",
    },
  }));

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/jaya-janyani-04051561/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/jaya.sakharani", "_blank");
  }; 
  
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/jayajanyanii/?hl=en", "_blank");
  }; 
  
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            style={{
              backgroundColor: appBarColor,
              boxShadow: "none",
            }} /*appBarColor*/
          >
            <Grid container alignItems="center" justifyContent="space-between">
              {/* Left side with adb icon */}
              <Grid item>
                {/* <IconButton sx={{ p: 0, cursor: 'none', ":hover": { backgroundColor: 'transparent' } }}> */}
                <IconButton edge="start" style={{ marginLeft: "16px" }}>
                  <img
                    src={img1}
                    alt="Your Icon"
                    style={{
                      width: "40px",
                      height: "50px",
                      marginLeft: "normal",
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <Toolbar sx={{ marginLeft: "auto" }}>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleDrawerToggle}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    {/* Drawer */}
                    <Drawer
                      anchor="right"
                      open={drawerOpen}
                      onClose={handleDrawerToggle}
                    >
                      <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                          {theme.direction === "rtl" ? (
                            <ChevronLeftIcon />
                          ) : (
                            <ChevronRightIcon />
                          )}
                        </IconButton>
                      </DrawerHeader>
                      <Divider />
                      {pages.map((page) => (
                        <List key={page} sx={{ width: 240 }}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText
                                primary={page}
                                sx={{ color: "black", fontWeight: "bold" }}
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      ))}
                    </Drawer>
                  </Box>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page}
                        sx={{
                          my: 2,
                          color: "white",
                          display: "block",
                          fontWeight: "bold",
                        }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </Grid>
            </Grid>
          </AppBar>
        </Box>
        {/* Spacer to offset content under the fixed AppBar */}
        <Toolbar />
      </div>
      {/* Parallax Section 1 */}
      <Parallax
        bgImage={img3}
        strength={300}
        style={{ marginTop: "-64px" }}
        blur={3}
      >
        <div
          style={{
            height: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Avatar
            alt="Jaya Profile Pic"
            src={img2}
            style={{
              width: 200,
              height: 200,
              marginTop: 80,
             }}
              className="ripple-effect"
          >           
          </Avatar> */}

          <div className="pulse">
            <img src={img2} alt="Jaya Profile Pic" className="static-image" />
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <Typography
            variant="h3"
            component="div"
            style={{
              color: "white",
              paddingTop: 60,
            }}
          >
            Jaya Janyani
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{
              color: "white",
              textAlign: "center", // Center the text
              marginTop: "10px", // Add margin at the top for spacing
              fontSize: "1.5rem", // Set a base font size (adjust as needed)
              lineHeight: "1.4", // Set the line height for better readability
            }}
          >
            OCR Consultant, .Net Developer, Website Developer
          </Typography>
          <Stack spacing={2} direction="row" sx={{ marginTop: 4 }}>
            <ColorButton variant="contained">Hire Me</ColorButton>
            <ColorButton variant="contained">Download CV</ColorButton>
          </Stack>
        </div>
      </Parallax>

      <Container maxWidth="xl">
        <div>
          <Typography variant="h4" component="div" style={{ marginTop: 40 }}>
            Regular Content Section
          </Typography>
          <p>Your regular content goes here.</p>
        </div>
      </Container>

      <div
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            aria-label="LinkedIn"
            color="primary"
            onClick={handleLinkedInClick}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            aria-label="Facebook"
            color="primary"
            onClick={handleFacebookClick}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            color="primary"
            onClick={handleInstagramClick}
          >
            <InstagramIcon />
          </IconButton>
        
        </Stack>
        <p>Jaya Janyani</p>
        <p>&copy; My Resume. All rights reserved.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
