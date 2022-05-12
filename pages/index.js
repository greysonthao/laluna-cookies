import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Herosection from "../components/Herosection";
import Paper from "@mui/material/Paper";
import heroImage from "../images/cookie-hero.png";
import UnderHero from "../components/UnderHero";
import Video from "../components/Video";
import ThreeReasons from "../components/ThreeReasons";
import OrderButton from "../components/OrderButton";
import FAQ from "../components/FAQ";
import ActionPlan from "../components/ActionPlan";
import Testimonials from "../components/Testimonials";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CookieIcon from "@mui/icons-material/Cookie";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laluna: Low-Carb Cookies</title>
        <meta name="description" content="Delicious paleo cookies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection />
      <UnderHero />
      <Container maxWidth="lg">
        <Video />
        <ThreeReasons />
        <Box margin="6rem 0 6rem 0" display="flex" justifyContent="center">
          <OrderButton />
        </Box>
        <FAQ />
        <ActionPlan />
        <Box margin="6rem 0 6rem 0" display="flex" justifyContent="center">
          <OrderButton />
        </Box>
        <Testimonials />
        <Box margin="6rem 0 6rem 0" display="flex" justifyContent="center">
          <OrderButton />
        </Box>
      </Container>
      <Box backgroundColor="black" padding="5rem">
        <Container maxWidth="lg">
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: "white",
              },
            }}
          >
            <Chip
              icon={<CookieIcon />}
              label="YUM"
              sx={{ backgroundColor: "white" }}
            />
          </Divider>
          <Box>
            <Typography
              variant="body1"
              margin="1rem 0 0 0"
              textAlign="center"
              sx={{ color: "white" }}
            >
              © 2022 Laluna LLC
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
