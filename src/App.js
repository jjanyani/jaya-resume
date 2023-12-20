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
import img3 from "./images/parallax9.jpg";
import img1 from "./images/JJ.png";
import img2 from "./images/Jaya.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./css/rippleanimation.css"

function App() {
  const [appBarColor, setAppBarColor] = useState("transparent");
  const [drawerOpen, setDrawerOpen] = useState(false);



  useEffect(() => {
    document.title = "Jaya Janyani Resume";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 150; // Adjust this value as needed

      if (scrollPosition > threshold) {
        setAppBarColor("white"); // Change to your desired background color
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

  const defaultTheme = createTheme();

  const pages = ["About", "Skills", "Portfolio", "Experience", "Contact"];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#D60093",
    "&:hover": {
      backgroundColor: "#D60093",
    },
  }));

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
                <IconButton sx={{ p: 0, cursor: 'none', ":hover": { backgroundColor: 'transparent' } }}>
                  <Avatar
                    alt="J*J"
                    src={img1}
                    sx={{ width: 80, height: 80 }}
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
                      {pages.map((page) => (
                        <List key={page} sx={{ width: 240 }}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText
                                primary={page}
                                sx={{ color: "#D60093", fontWeight: "bold" }}
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
                          color: "#D60093",
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
      <Parallax bgImage={img3} strength={500} style={{ marginTop: "-64px" }}>
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
            <span style={{ '--i': 0 }}></span>
            <span style={{ '--i': 1 }}></span>           
          </div>
          <Typography
            variant="h3"
            component="div"
            style={{
              color: "#D60093",
              paddingTop: 60,
            }}
          >
            Jaya Janyani
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{
              color: "#D60093",
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

      {/* Content Section */}
      <Container maxWidth="xl">
        <div>
          <Typography variant="h4" component="div" style={{ marginTop: 40 }}>
            Regular Content Section
          </Typography>
          <p>Your regular content goes here.</p>
        </div>
      </Container>

      {/* Parallax Section 2 */}
      <Parallax bgImage={img3} strength={500}>
        <div style={{ height: 500 }}>
          <Container>
            <Typography
              variant="h2"
              component="div"
              style={{ color: "#fff", paddingTop: 200 }}
            >
              Parallax Section 2
            </Typography>
          </Container>
        </div>
      </Parallax>
    </ThemeProvider>
  );
}

export default App;
