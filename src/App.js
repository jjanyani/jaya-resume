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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Parallax } from "react-parallax";
import CssBaseline from "@mui/material/CssBaseline";
import img1 from "./images/parallax2.jpg";
import img2 from "./images/parallax3.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [appBarColor, setAppBarColor] = useState("transparent");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 400; // Adjust this value as needed

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

  const defaultTheme = createTheme();

  const pages = ["About", "Skills", "Portfolio", "Experience", "Contact"];

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            style={{ backgroundColor: appBarColor, boxShadow: "none" }}
          >
            <Toolbar sx={{ marginLeft: "auto" }}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                          <ListItemText primary={page} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  ))}
                </Drawer>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Spacer to offset content under the fixed AppBar */}
        <Toolbar />
      </div>
      {/* Parallax Section 1 */}
      <Parallax bgImage={img1} strength={500} style={{ marginTop: "-64px" }}>
        <div style={{ height: 500 }}>
          <Container>
            <Typography
              variant="h2"
              component="div"
              style={{ color: "#fff", paddingTop: 200 }}
            >
              Parallax Section 1
            </Typography>
          </Container>
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
      <Parallax bgImage={img2} strength={500}>
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
