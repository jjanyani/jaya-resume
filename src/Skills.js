import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img5 from "./images/parallax3.jpg";
import img1 from "./images/skills1.png";
import img2 from "./images/skills2.png";
import img3 from "./images/skills3.png";
import img4 from "./images/skills4.png";
import img6 from "./images/skills5.png";
import img7 from "./images/skills6.png";
import img8 from "./images/skills7.png";
import img9 from "./images/skills8.png";
import img10 from "./images/skills9.svg";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "@mui/material";

function Skills() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [showNavButtons, setShowNavButtons] = useState(isSmallScreen);

  useEffect(() => {
    setShowNavButtons(isSmallScreen);
  }, [isSmallScreen]);

  const slides = [
    { image: img1, text: "VB.Net : 8 Years" },
    { image: img2, text: "SQL : 8 Years" },
    { image: img8, text: "OCR : 8 Years" },
    { image: img3, text: "HTML, CSS & JavaScript : 5 Years" },
    { image: img9, text: "Material UI : 3 Years" },
    { image: img10, text: "Materialize CSS : 3 Years" },
    { image: img4, text: "React JS : 2 Years" },
    { image: img6, text: "Node JS : 2 Years" },
    { image: img7, text: "Mongo DB : 2 Years" },
  ];
  const settings = {
    animation: "slide",
    swipe: true,
    autoPlay: true,
    interval: 3000, // set the autoplay interval in milliseconds
    indicators: true,
    timeout: 500,
    navButtonsAlwaysVisible: !showNavButtons,
    cycleNavigation: true,
    navButtonsProps: {
      style: {
        backgroundColor: "#3B7D23",
      },
    },
    activeIndicatorIconButtonProps: {
      style: {
        backgroundColor: "#3B7D23", // 2
      },
    },
    navButtonsWrapperProps: {
      style: {
        bottom: "0",
        top: "auto",
      },
    },
    // slidesToShow: 3, // show three images at a time
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
          Professional Skills
        </Typography>

        <Carousel {...settings} sx={{ textAlign: "center" }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={slide.image}
                alt={`carousel-${index}`}
                style={{ width: "250px", height: "220px" }}
              />
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "30px",
                  marginBottom: "10px",
                }}
                gutterBottom
              >
                {slide.text}
              </Typography>
            </div>
          ))}
        </Carousel>
      </Box>
    </Paper>
  );
}

export default Skills;
