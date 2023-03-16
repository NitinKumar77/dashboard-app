import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginDetail: { username: "", password: "" },
  isLoggedIn: false,
  error: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setLoginDetails(state, action) {
      state.loginDetail.username = action.payload.username;
      state.loginDetail.password = action.payload.password;
    },
    setLoginError(state, action) {
      state.error = action.payload;
    },
  },
});

export const loginThunk = (loginDetail) => {
  console.log("logindetail", loginDetail);
  return async (dispatch) => {
    const authLoginDetails = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginDetail.username,
          password: loginDetail.password,
          // expiresInMins: 60, // optional
        }),
      });
      if (!response.ok) {
        console.log(response);
        dispatch(setLoggedIn(false));
        throw new Error("Invalid credentials !!!");
      }
      return await response.json();
    };
    try {
      const data = await authLoginDetails();
      dispatch(setLoggedIn(true));
      console.log("token ", data);
    } catch (error) {
      dispatch(setLoginError(error.message));
    }
  };
};

export const { setLoginError, setLoggedIn, setLoginDetails } =
  loginSlice.actions;
export default loginSlice.reducer;
