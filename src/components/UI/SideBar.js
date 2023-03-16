import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import React from "react";
import { setLoggedIn } from "../../redux/LoginSlice";
import { useDispatch } from "react-redux";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        width: "350px",
        background: "#FFFFFF",
      }}
    >
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a'>
              <ListItemIcon>
                <AccountCircleIcon fontSize='large' sx={{ color: "#61FF48" }} />
              </ListItemIcon>
              <Typography
                primary='Users'
                sx={{
                  fontFamily: "Inter",

                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "30px",
                  lineHeight: "39px",
                  /* identical to box height */
                  color: "#61FF48",
                }}
              >
                Users
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a'>
              <ListItemIcon>
                <ViewInArTwoToneIcon fontSize='large' />
              </ListItemIcon>
              <Typography
                primary='Products'
                sx={{
                  fontFamily: "Inter",

                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "28px",
                  lineHeight: "39px",
                  color: "#777575",
                }}
              >
                Products
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginTop: "500px" }}>
            <ListItemButton
              onClick={() => {
                localStorage.removeItem("token");
                dispatch(setLoggedIn(false));
              }}
            >
              <ListItemIcon>
                <LogoutIcon fontSize='large' />
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "Inter",

                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "28px",
                  lineHeight: "39px",
                  color: "#777575",
                }}
              >
                LOGOUT
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
