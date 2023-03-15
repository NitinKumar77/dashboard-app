import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userListThunk } from "../redux/UserListSlice";
import Pagination from "./Pagination";
import LoadingBar from "./UI/LoadingBar";
import BasicTable from "./UI/TableList";

function UserListTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userListThunk());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.userList.isLoading);
  return (
    <>
      {isLoading && <LoadingBar />}
      {!isLoading && <BasicTable />}
      <Pagination />
    </>
  );
}

export default UserListTable;
