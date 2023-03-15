import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  usersListData: [],
  isLoading: true,
};
const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUserListData(state, action) {
      console.log(action.payload);
      state.usersListData = action.payload;
    },
    setUserDataIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const userListThunk = () => {
  return async (dispatch) => {
    const fetchingData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Fetching User List Went WRONG");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchingData();

      dispatch(setUserListData(data.users));
    } catch (error) {
      console.log(error.message);
    }
    dispatch(setUserDataIsLoading(false));
  };
};

export const { setUserDataIsLoading, setUserListData } = usersListSlice.actions;
export default usersListSlice.reducer;
