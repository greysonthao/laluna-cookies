/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import orderImage from "../images/order.png";
import waitImage from "../images/wait.png";
import cookieImage from "../images/eaten-cookie.png";

export default function ActionPlan() {
  return (
    <Box margin="0 0 6rem 0">
      <Typography
        variant="h5"
        component="h5"
        textAlign="center"
        margin="0 0 3rem 0"
        fontWeight="bold"
      >
        It's Time to Get Your Hands On These Amazing Cookies
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Image src={orderImage} alt="order" />
          <Typography variant="h6" component="h6" textAlign="center">
            1. ORDER YOUR COOKIES
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={waitImage} alt="wait" />
          <Typography variant="h6" component="h6" textAlign="center">
            2. WAIT FOR YOUR DELIVERY
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={cookieImage} alt="cookie" />
          <Typography variant="h6" component="h6" textAlign="center">
            3. TAKE A BITE OUT OF HAPPINESS
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
