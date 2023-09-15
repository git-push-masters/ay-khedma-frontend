import {
  loginOrRegisterStart,
  loginOrRegisterSuccess,
  loginOrRegisterFailure,
} from "./slices/userSlice";
import axiosInstsnce from "../configs/axiosInstanse";
export const login = async (dispatch, user) => {
  dispatch(loginOrRegisterStart());
  try {
    const res = await axiosInstsnce.post("/auth/login", user);
    dispatch(loginOrRegisterSuccess(res?.data?.body));
  } catch (e) {
    dispatch(loginOrRegisterFailure());
    console.log(e?.response?.data?.msgs);
    dispatch(loginOrRegisterFailure(e?.response?.data?.msgs));
  }
};
export const register = async (dispatch, user) => {
  dispatch(loginOrRegisterStart());
  try {
    const res = await axiosInstsnce.post("/auth/verify", user);
    dispatch(loginOrRegisterSuccess(res?.data?.body));
  } catch (e) {
    dispatch(loginOrRegisterFailure(e.response.data.msgs));
    console.log(e?.response?.data?.msgs);
  }
};
