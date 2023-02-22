import {
  loginError,
  loginLoader,
  loginLogout,
  loginSuccess,
} from "./auth.type";
import axios from "axios";
export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: loginLoader });
  try {
    let url = "http://localhost:9000/user/login";
    let res = await axios.post(url, data);
    if (res.data.status) {
      console.log(res.data);
      dispatch({ type: loginSuccess, payload: res.data });
      localStorage.setItem("id", JSON.stringify(res.data.data._id));
      localStorage.setItem("user", JSON.stringify(res.data.data));
      return true;
    } else {
      console.log(res.data);
      console.log("sdcsd");
      return false;
    }
  } catch (error) {
    dispatch({ type: loginError });
    console.log(error.message);
    console.log("sd32132132csd");

    return false;
  }
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: loginLogout });
  localStorage.removeItem("id");
  localStorage.removeItem("user");
  return true;
};
