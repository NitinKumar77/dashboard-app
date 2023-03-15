import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function Rightbar() {
  return (
    <Box flex={3} p={2} sx={{ bgcolor: "red" }}>
      <Box
        position='fixed'
        sx={{
          background: "#FFFFFF",
          borderradius: "10px",
        }}
      >
        {" "}
        Right Bar
        <Outlet />
      </Box>
    </Box>
  );
}

export default Rightbar;
