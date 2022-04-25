/* eslint-disable @next/next/no-img-element */
import React from "react";
import Paper from "@mui/material/Paper";
import cookieHeroImage from "../images/cookie-hero.png";
import Image from "next/image";
import Box from "@mui/material/Box";
import OrderButton from "./OrderButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Herosection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matches);

  return (
    <div>
      <Paper
        sx={{
          height: "90vh",
          backgroundImage: `url(${cookieHeroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant={matches ? "h2" : "h1"}
          component="h1"
          fontWeight="bold"
          textAlign="center"
          color="white"
          padding="8rem 2rem 2rem 2rem"
        >
          YUMMY GUILT-FREE COOKIES
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          textAlign="center"
          color="white"
          paddingBottom="3rem"
        >
          GLUTEN-FREE, DAIRY-FREE, AND PACKED WITH PROTEIN
        </Typography>
        <Box display="flex" justifyContent="center" margin="2rem">
          <OrderButton />
        </Box>
      </Paper>
    </div>
  );
}
