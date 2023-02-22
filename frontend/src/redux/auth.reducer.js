import {
  loginError,
  loginLoader,
  loginLogout,
  loginSuccess,
} from "./auth.type";
const id = JSON.parse(localStorage.getItem("id")) || "";
const iState = {
  loader: false,
  error: false,
  data: [],
  isAuth: id ? true : false,
};
export const userReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case loginLoader: {
      return {
        ...state,
        loader: true,
      };
    }
    case loginError: {
      return {
        ...state,
        loader: false,
        error: true,
      };
    }

    case loginSuccess: {
      return {
        ...state,
        loader: false,
        error: false,
        isAuth: true,
        id: payload.data._id,
      };
    }
    case loginLogout: {
      return {
        ...state,
        loader: false,
        error: false,
        isAuth: false,
        id: "",
      };
    }
    default: {
      return state;
    }
  }
};
