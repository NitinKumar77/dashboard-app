import { configureStore } from "@reduxjs/toolkit";
import usersListSlice from "./UserListSlice";

const store = configureStore({
  reducer: { userList: usersListSlice },
});
export default store;
