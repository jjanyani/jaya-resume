import React, { useEffect, useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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
import img5 from "./images/parallax2.jpg";
import img1 from "./images/JJ.png";
import img2 from "./images/Jaya.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import "./css/rippleanimation.css";
import "./css/about.css";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Fab from "@mui/material/Fab";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

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
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState("hidden");

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        // Add the animation class when the element is 75% visible
        aboutRef.current.classList.add("slide-in");
      } else {
        // Remove the animation class when it's no longer in view
        aboutRef.current.classList.remove("slide-in");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [contactView, setcontactView] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = contactRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        setcontactView(true);
      } else {
        setcontactView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDownload = () => {
    const cvUrl =
      "https://drive.google.com/file/d/12Kl9JQBZFJCdeCnFEzG5LoOwMkba-Qzm/view?usp=drive_link";

    // Open the CV file in a new tab
    window.open(cvUrl, "_blank");
  };

  useEffect(() => {
    document.title = "Jaya Janyani Resume";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 150; // Adjust this value as needed

      if (scrollPosition >= threshold) {
        setAppBarColor("black"); // Change to your desired background color
        setIsVisible("visible");
      } else {
        setAppBarColor("transparent");
        setIsVisible("hidden");
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

  const pages = ["About", "Skills", "Experience", "Education", "Contact"];

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

  const handlePageClick = (page) => {
    if (page === "Contact" && contactRef.current) {
      const formPosition = contactRef.current.offsetTop - 65; // Adjust as needed
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    } else if (page === "About" && aboutRef.current) {
      const formPosition = aboutRef.current.offsetTop - 100; // Adjust as needed
      aboutRef.current.classList.add("slide-in");
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    } else if (page === "Skills" && skillsRef.current) {
      const formPosition = skillsRef.current.offsetTop - 60; // Adjust as needed
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    } else if (page === "Education" && skillsRef.current) {
      const formPosition = educationRef.current.offsetTop - 60; // Adjust as needed
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    } else if (page === "Experience" && experienceRef.current) {
      const formPosition = experienceRef.current.offsetTop - 60; // Adjust as needed
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    }
  };

  const about = {
    title: "About",
    description:
      "Hello! I'm Jaya Janyani, a tech enthusiast with a bachelor's degree in Information Technology from Solapur University, Maharashtra. Eager to contribute my skills in either Bangalore/Pune.",
    image: img5,
    imageText: "main image description",
    linkText: "",
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      {/* AppBar Section */}
      <div style={{ backgroundColor: "black" }}>
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
                    onClick={scrollToTop}
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
                            <ListItemButton
                              onClick={() => {
                                handlePageClick(page);
                                setDrawerOpen(false);
                              }}
                            >
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
                        onClick={() => handlePageClick(page)}
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
      {/* AppBar Section end */}

      {/* Profile Section */}
      <Parallax
        bgImage={img3}
        strength={300}
        style={{ marginTop: "-64px" }}
        // blur={0}
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
            <ColorButton
              variant="contained"
              onClick={() => handlePageClick("Contact")}
            >
              Hire Me
            </ColorButton>
            <ColorButton variant="contained" onClick={handleDownload}>
              Download CV
            </ColorButton>
          </Stack>
        </div>
        <Fab
          aria-label="scroll-to-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            backgroundColor: "#3B7D23",
            color: "white",
            visibility: `${isVisible}`,
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </Parallax>
      {/* Profile Section end*/}

      {/* About Section */}
      <div ref={aboutRef} style={{ marginTop: 40 }} className="swipe-in">
        <About post={about} />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} style={{ marginTop: 40 }}>
        <Skills />
      </div>

      {/* Experience Section */}
      <div ref={experienceRef} style={{ marginTop: 40 }}>
        <Experience />
      </div>

      {/* Education Section */}
      <div ref={educationRef} style={{ marginTop: 40 }}>
        <Education />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} style={{ marginTop: 50 }}>
        <Contact contactView={contactView} />
      </div>
      {/* Contact Section end*/}

      {/* Footer Section*/}
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
        <Typography
          variant="body1"
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: 1.6,
            color: "#333",
            marginBottom: "20px",
          }}
        >
          "Thank You for Exploring My Portfolio! I'm grateful for your visit to
          my personal space on the web. It means a lot to me that you took the
          time to explore my work and experiences. If you have any questions,
          want to connect, or just share your thoughts, feel free to reach out.
          Your interest and support are truly appreciated.
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#333",
            marginBottom: 0,
          }}
        >
          &copy; Created by Jaya Janyani. All rights reserved.
        </Typography>
      </div>
      {/* Footer Section end*/}
    </ThemeProvider>
  );
}

export default App;
