import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { Card, CardContent, TextField, InputAdornment } from "@mui/material";
import { Parallax } from "react-parallax";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import img3 from "./images/parallax4.jpg";
import img4 from "./images/hospet.jpg";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact(props) {
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
  const [snackopen, setSnackOpen] = React.useState(false);
  const [backOpen, setBackOpen] = React.useState(false);

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

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
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

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#3B7D23",
    "&:hover": {
      backgroundColor: "#3B7D23",
    },
  }));

  const handleSubmit = async (e) => {
    if (validate()) {
      e.preventDefault();
      setBackOpen(true);
      try {
        const response = await fetch(
          "https://jjbackend.onrender.com/api/send-email",
          {
            // const response = await fetch(" https://sore-gold-bison-wig.cyclic.app", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

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

  return (
    <div>
      <Parallax bgImage={img3} strength={300} blur={3}>
      <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              backgroundColor: "rgba(0,0,0,.7)",
            }}
          >
        <Typography        
          variant="h4"
          style={{ color: "white", marginBottom: 30,textAlign:'center' }}
        >
          Feel free to contact me
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginBottom: 4 }}
        >
          <Zoom in={props.contactView} timeout={800}>
            <Grid item xs={12} sm={8} md={5}>
              <Card
                sx={{ display: "flex", height: "100%" }}
                className="zoom-in"
              >
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
          </Zoom>
          <Zoom
            in={props.contactView}
            timeout={800}
            style={{ transitionDelay: "300ms" }}
          >
            <Grid item xs={12} sm={8} md={5}>
              <Card
                sx={{ display: "flex", height: "100%" }}
                className="zoom-in"
              >
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
                        583201, Karnataka, India
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
          </Zoom>
        </Grid>
        </Box>
      </Parallax>

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
    </div>
  );
}

export default Contact;
