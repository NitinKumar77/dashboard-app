import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import usersListSlice from "./UserListSlice";

const store = configureStore({
  reducer: { userList: usersListSlice, login: LoginSlice },
});
export default store;
