const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currentUser: null,
    isFitching: false,
    isError: false,
    error: null,
  },
  reducers: {
    loginOrRegisterStart: (state) => {
      state.isFitching = true;
      state.isError = false;
    },
    loginOrRegisterSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFitching = false;
      state.isError = false;
    },
    loginOrRegisterFailure: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isFitching = false;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});
export const {
  loginOrRegisterStart,
  loginOrRegisterSuccess,
  loginOrRegisterFailure,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;
