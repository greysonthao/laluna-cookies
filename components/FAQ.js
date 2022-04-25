import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

export default function SimpleAccordion() {
  return (
    <Box margin="0 0 6rem 0">
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        margin="0 0 1rem 0"
        fontWeight="bold"
      >
        Frequently Asked Questions
      </Typography>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight="bold">
            How much does each cookie pack cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Each cookie pack consists of a dozen chocolate chip cookies and will
            cost $25.99 (shipping is included!).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight="bold">
            How many cookies are in a cookie pack?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Each cookie pack has a dozen chocolate chip cookies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography fontWeight="bold">
            What are the ingredients for the chocolate chip cookies?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our ingredients include: Almond Flour, Organic Coconut Flour, Baking
            Soda, Sea Salt, Organic Coconut Oil, Organic Coconut Sugar, Almond
            Butter, Vanilla Extract, Organic Eggs, Dark Chocolate Chips
            (Chocolate Liquor, Inulin, Erythritol, Cocoa Butter, Sunflower
            Lecithin, Vanilla Extract, Stevia Leaf Reb M)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography fontWeight="bold">
            Can you substitute ingredients for me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unfortunately, we are not able to make any substitutions at this
            time. However, we may add more items in the future. Sign up here to
            stay in the loop.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography fontWeight="bold">
            Do you offer anything other than chocolate chip cookies?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We’re thrilled you’re interested in other baked goods.
            Unfortunately, we are only offering chocolate chip cookies at this
            time. That said, we are considering adding more items in the future.
            Sign up here to stay in the loop.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography fontWeight="bold">
            Are these cookies compliant on the paleo diet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Our cookies are paleo-friendly!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography fontWeight="bold">
            How are you keeping us safe from COVID-19?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your safety is our top priority. Therefore, when we bake your
            cookies, we will be washing our hands regularly as well as wearing
            face masks and hair nets throughout the entire process.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
