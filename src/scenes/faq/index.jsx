import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />
      <Box mt={2}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ut eum magnam repellendus velit perferendis quo
              fuga, aut officia dolorem corrupti itaque, magni doloribus
              voluptatum omnis necessitatibus esse expedita!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another Important Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ut eum magnam repellendus velit perferendis quo
              fuga, aut officia dolorem corrupti itaque, magni doloribus
              voluptatum omnis necessitatibus esse expedita!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              The best Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ut eum magnam repellendus velit perferendis quo
              fuga, aut officia dolorem corrupti itaque, magni doloribus
              voluptatum omnis necessitatibus esse expedita!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              A Cool Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ut eum magnam repellendus velit perferendis quo
              fuga, aut officia dolorem corrupti itaque, magni doloribus
              voluptatum omnis necessitatibus esse expedita!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Final Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ut eum magnam repellendus velit perferendis quo
              fuga, aut officia dolorem corrupti itaque, magni doloribus
              voluptatum omnis necessitatibus esse expedita!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default FAQ;
