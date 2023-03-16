import * as React from "react";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { setUsersQuery } from "../../redux/UserListSlice";

export default function SearchBar() {
  const searchUserQuery = useSelector((state) => state.userList.query);
  const dipatch = useDispatch();
  const onChangeHandler = ({ target: { value } }) => {
    dipatch(setUsersQuery(value));
  };
  console.log(searchUserQuery);
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
          onChange={onChangeHandler}
        />
      </Box>
    </Box>
  );
}
