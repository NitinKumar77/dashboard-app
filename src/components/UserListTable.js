import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userListThunk } from "../redux/UserListSlice";
import Pagination from "./Pagination";
import LoadingBar from "./UI/LoadingBar";
import BasicTable from "./UI/TableList";

function UserListTable() {
  const next8elements = useSelector((state) => state.userList.next8elements);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userListThunk(next8elements));
  }, [dispatch, next8elements]);

  const isLoading = useSelector((state) => state.userList.isLoading);
  return (
    <>
      {isLoading && <LoadingBar />}
      {!isLoading && (
        <>
          {" "}
          <BasicTable /> <Pagination mode={"users"} />
        </>
      )}
    </>
  );
}

export default UserListTable;
