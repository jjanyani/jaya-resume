import React, { useEffect, useState, useRef } from "react";
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
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Parallax } from "react-parallax";
import CssBaseline from "@mui/material/CssBaseline";
import img3 from "./images/parallax1.jpg";
import img1 from "./images/JJ.png";
import img2 from "./images/Jaya.png";
import img4 from "./images/hospet.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Fab from "@mui/material/Fab";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const [snackopen, setSnackOpen] = React.useState(false);
  const [backOpen, setBackOpen] = React.useState(false);
  const defaultTheme = createTheme();
  const theme = useTheme();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState("hidden");

  // useEffect(() => {
  //   // Add a scroll event listener

  //   const handleScroll = () => {
  //     // Set isVisible based on the scroll position
  //     setIsVisible(window.scrollY > 100); // Adjust the threshold value as needed
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
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
    if (page === "Contact" && footerRef.current) {
      const formPosition = footerRef.current.offsetTop - 60; // Adjust as needed
      window.scrollTo({ top: formPosition, behavior: "smooth" });
    } else {
      // Handle other page clicks if needed
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Validate Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    if (validate()) {
      e.preventDefault();
      setBackOpen(true);
      try {
        // const response = await fetch("http://localhost:5000/api/send-email", {
        const response = await fetch(" https://sore-gold-bison-wig.cyclic.app", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          setBackOpen(false);
          throw new Error(`HTTP error! Status: ${response.status}`);
        
        } else {
          // const responseText = await response.text();

          setSnackOpen(true);
          setBackOpen(false);
        }
      } catch (error) {
        setBackOpen(false);
        console.error("Error sending email", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

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
      {/* Parallax Section 1 */}
      <Parallax
        bgImage={img3}
        strength={300}
        style={{ marginTop: "-64px" }}
        blur={1}
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
            <ColorButton
              variant="contained"
              onClick={() => handlePageClick("Contact")}
            >
              Hire Me
            </ColorButton>
            <ColorButton variant="contained">Download CV</ColorButton>
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

      <Container maxWidth="xl">
        <div>
          <Typography variant="h4" component="div" style={{ marginTop: 40 }}>
            Regular Content Section
          </Typography>
          <p>Your regular content goes here.</p>
        </div>
      </Container>

      <div ref={footerRef} style={{ marginTop: 50 }}>
        <Parallax bgImage={img3} strength={300} blur={3}>
          <Typography
            variant="h4"
            align="center"
            style={{ color: "white", marginBottom: 30 }}
          >
            Feel free to contact me
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ marginBottom: 4 }}
          >
            <Grid item xs={12} sm={8} md={5}>
              <Card sx={{ display: "flex", height: "100%" }}>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Name"
                      fullWidth
                      margin="normal"
                      required
                      helperText={errors.name}
                      error={!!errors.name}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "green",
                          },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* Your icon for Name field, e.g., PersonIcon */}
                            {/* Replace PersonIcon with your desired icon component */}
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    <TextField
                      label="Email"
                      fullWidth
                      margin="normal"
                      type="email"
                      required
                      helperText={errors.email}
                      error={!!errors.email}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "green",
                          },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* Your icon for Name field, e.g., PersonIcon */}
                            {/* Replace PersonIcon with your desired icon component */}
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    <TextField
                      label="Subject"
                      fullWidth
                      margin="normal"
                      required
                      helperText={errors.subject}
                      error={!!errors.subject}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "green",
                          },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* Your icon for Name field, e.g., PersonIcon */}
                            {/* Replace PersonIcon with your desired icon component */}
                            <SubjectIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                    />
                    <TextField
                      label="Message"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      required
                      helperText={errors.message}
                      error={!!errors.message}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "green",
                          },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* Your icon for Name field, e.g., PersonIcon */}
                            {/* Replace PersonIcon with your desired icon component */}
                            <MessageIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ColorButton variant="contained" type="submit">
                        Send
                      </ColorButton>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={5}>
              <Card sx={{ display: "flex", height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={img4}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginTop: 2 }}
                      >
                        Address:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        House# 29/30, Cake Zone building, Cowlpete, Hosapete -
                        583201
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginTop: 2 }}
                      >
                        Mobile:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +91 - 8237106387
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginTop: 2 }}
                      >
                        Email Id:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        jayajanyani1592@gmail.com
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Parallax>
      </div>
      <Snackbar
        open={snackopen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        action={action}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backOpen}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

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
        <p>&copy; My resume. All rights reserved.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
