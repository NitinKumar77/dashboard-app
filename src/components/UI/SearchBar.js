import * as React from "react";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 10px",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          border: "2px solid white",

          padding: "5px",
          width: "300px",
          height: "30px",
          borderRadius: "10px",
        }}
      >
        <InputBase
          placeholder='Search…'
          inputProps={{ "aria-label": "search" }}
          onChange={() => {}}
        />
      </Box>
    </Box>
  );
}
