import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const login = (user) => {
  console.log("user", user);

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`auth/signin`, {
      ...user,
    });
    console.log("response", res);
    if (res.data.status === "SUCCESS") {
      const { token, user } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
    if (res.data.status === "FAILURE") {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.messages[0].message },
      });
    }
  };
};
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};
export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });

    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
  };
};
