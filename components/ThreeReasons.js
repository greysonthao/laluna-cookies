import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import squareCookies from "../images/cookies.png";
import squareGirls from "../images/girls.png";
import squareEggs from "../images/eggs.png";

export default function ThreeReasons() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        fontWeight="bold"
        textAlign="center"
        marginTop=""
        marginBottom="2rem"
      >
        Why You Should Order From Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Image src={squareCookies} alt="cookies" />
          <Typography
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            margin="1rem 0 1rem 0"
          >
            Get Delicious Cookies
          </Typography>
          <Typography variant="body1" component="p" align="justify">
            One cookie won’t be enough. That’s why we are selling them in packs
            of 12. We recommend you share… but you don’t have to if you don’t
            want to 🙂
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={squareGirls} alt="girls baking" />
          <Typography
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            margin="1rem 0 1rem 0"
          >
            Support Young Entreprenuers
          </Typography>
          <Typography variant="body1" component="p" align="justify">
            When you place an order, you are helping us build our 1st business!
            We’re 3 sisters (ages 6, 5, and 3) that love to bake.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={squareEggs} alt="ingredients" />
          <Typography
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            margin="1rem 0 1rem 0"
          >
            Receive The Best Ingredients
          </Typography>
          <Typography variant="body1" component="p" align="justify">
            You won’t find bleached wheat flour or high fructose corn syrup here
            (ew!). We only use the finest ingredients.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
