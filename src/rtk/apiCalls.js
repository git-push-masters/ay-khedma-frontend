import axios from "axios";
import {
  loginOrRegisterStart,
  loginOrRegisterSuccess,
  loginOrRegisterFailure,
} from "./slices/userSlice";
export const loginOrRegister = async (dispatch, user) => {
  dispatch(loginOrRegisterStart());
  try {
    const res = await axios.post("api", user);
    dispatch(loginOrRegisterSuccess(res.data));
  } catch {
    dispatch(loginOrRegisterFailure());
  }
};
