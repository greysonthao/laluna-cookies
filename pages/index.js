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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laluna Cookies</title>
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
      <Box backgroundColor="black" padding="10rem"></Box>
    </div>
  );
}
