import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import Login from "../LogIn";
import Rightbar from "./Rightbar";
import SideBar from "./SideBar";

function Dashboard() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const token = useLoaderData();

  return (
    <>
      {!isLoggedIn && !token && <Login />}

      <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <SideBar />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
