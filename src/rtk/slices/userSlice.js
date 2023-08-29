const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currentUser: null,
    isFitching: false,
    error: false,
  },
  reducers: {
    loginOrRegisterStart: (state) => {
      state.isFitching = true;
    },
    loginOrRegisterSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFitching = false;
    },
    loginOrRegisterFailure: (state) => {
      state.error = true;
    },
  },
});
export const {
  loginOrRegisterStart,
  loginOrRegisterSuccess,
  loginOrRegisterFailure,
} = userSlice.actions;
export default userSlice.reducer;
