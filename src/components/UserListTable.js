import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userListThunk } from "../redux/UserListSlice";
import Pagination from "./Pagination";
import LoadingBar from "./UI/LoadingBar";
import BasicTable from "./UI/TableList";

function UserListTable() {
  const next8elements = useSelector((state) => state.userList.next8elements);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.userList.isLoading);

  const memoizedNext8elements = useMemo(() => next8elements, [next8elements]);

  useEffect(() => {
    dispatch(userListThunk(memoizedNext8elements));
  }, [dispatch, memoizedNext8elements]);

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

export default React.memo(UserListTable);
