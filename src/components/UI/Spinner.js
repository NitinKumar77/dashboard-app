import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularSpinner() {
  return (
    <Stack
      sx={{ color: "grey.500" }}
      spacing={5}
      padding={"auto"}
      direction='row'
      justifyContent={"center"}
      alignContent={"center"}
    >
      <CircularProgress color='secondary' />
      <CircularProgress color='success' />
      <CircularProgress color='inherit' />
      <CircularProgress color='secondary' />
    </Stack>
  );
}
