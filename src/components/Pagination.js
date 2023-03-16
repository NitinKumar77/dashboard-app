import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setNextElements } from "../redux/UserListSlice";

export default function PaginationList() {
  const dispatch = useDispatch();

  const onChangeHandler = (e, page) => {
    const next = (page - 1) * 8;
    dispatch(setNextElements(next));
  };
  return (
    <Stack spacing={2} m='10px' alignItems='center' color='lightgreen'>
      <Pagination
        sx={{
          "button:hover": { bgcolor: "lightgreen" },
        }}
        onChange={onChangeHandler}
        count={10}
        variant='outlined'
        shape='rounded'
      />
    </Stack>
  );
}
