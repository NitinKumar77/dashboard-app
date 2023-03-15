import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Rightbar from "./Rightbar";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <Box>
      <Stack
        direction='row'
        spacing={2}
        sx={{ bgcolor: " #f3f3f3" }}
        justifyContent='space-between'
      >
        <SideBar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Dashboard;
