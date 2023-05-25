import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

function Pie() {
  return (
    <Box margin={5}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie;
