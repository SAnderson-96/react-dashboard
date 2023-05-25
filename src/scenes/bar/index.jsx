import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import React from "react";

function Bar() {
  return (
    <Box margin={8}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
