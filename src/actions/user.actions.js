import { userContants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: userContants.USER_REGISTER_REQUEST });
    const res = await axios.post(`auth/signup`, {
      ...user,
    });

    if (res.status === "SUCCESS") {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: userContants.USER_REGISTER_SUCCESS,
        payload: { message: res.messages[0].message },
      });
    } else {
      if (res.status === "FAILURE") {
        dispatch({
          type: userContants.USER_REGISTER_FAILURE,
          payload: { error: res.messages[0].message },
        });
      }
    }
  };
};
