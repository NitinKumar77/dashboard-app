import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularSpinner() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={6} direction='row'>
      <CircularProgress color='secondary' />
      <CircularProgress color='success' />
      <CircularProgress color='inherit' />
    </Stack>
  );
}
