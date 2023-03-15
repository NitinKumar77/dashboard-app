import { Box, IconButton, styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function SideBar() {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        width: "350px",
        height: "1080px",

        background: "yellow",
      }}
    >
      <Box position={"fixed"}>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SideBar;
