import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        padding: "10px",
      }}
    >
      <Search sx={{ border: "2px solid black", padding: "5px" }}>
        <InputBase
          placeholder='Search…'
          inputProps={{ "aria-label": "search" }}
          onChange={() => {}}
        />
      </Search>
    </Box>
  );
}
