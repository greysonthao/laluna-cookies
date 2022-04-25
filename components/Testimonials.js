/* eslint-disable @next/next/no-img-element */
import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import testimonialData from "../testimonial_data";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

export default function Testimonials() {
  const [testiData, setTestiData] = React.useState(testimonialData.data);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClickForward = () => {
    if (currentIndex === 3) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickBackward = () => {
    if (currentIndex === 0) {
      setCurrentIndex(3);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box margin="6rem 0 6rem 0">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          margin="2rem 0 2rem 0"
          fontWeight="bold"
        >
          Testimonials
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <Box>
              <Paper
                elevation={10}
                sx={{
                  borderRadius: 4,
                  padding: "4rem 2rem",
                }}
              >
                <Box display="flex" justifyContent="center">
                  <Paper sx={{ width: 250, height: 350 }}>
                    <img
                      src={testiData[currentIndex].image}
                      alt={testiData[currentIndex].name}
                      width="100%"
                      height="100%"
                    />
                  </Paper>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  marginBottom="1rem"
                >
                  <Box
                    marginRight="auto"
                    onClick={handleClickBackward}
                    sx={{ cursor: "pointer" }}
                  >
                    <ArrowBackIosNewIcon />
                  </Box>

                  <Typography
                    variant="h5"
                    textAlign="center"
                    marginTop="1.5rem"
                  >
                    "{testiData[currentIndex].testimonial}"
                  </Typography>
                  <Box
                    marginLeft="auto"
                    onClick={handleClickForward}
                    sx={{ cursor: "pointer" }}
                  >
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
                <Typography variant="h6" textAlign="center">
                  - {testiData[currentIndex].user}
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
