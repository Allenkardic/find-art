/** @format */

import axios from "axios";

import {
  //   authentication stuffs
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR_LOGIN,
  SET_ERROR_SIGNUP,
  UI_LOADING,
  CLEAR_ERROR
} from "./types";

export const signinUser = (existingUser, history) => (dispatch) => {
  dispatch({ type: UI_LOADING });
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/login", existingUser)
    .then((response) => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem("token", userToken);
      axios.defaults.headers.common.Authorization = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERROR });
      history.push("/artworks");
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({ type: SET_ERROR_LOGIN, payload: error.response.data.message });
    });
};

export const signupUser = (newUser, history) => (dispatch) => {
  dispatch({ type: UI_LOADING });
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/signup", newUser)
    .then((response) => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem("token", userToken);
      axios.defaults.headers.common.Authorization = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERROR });
      history.push("/artworks");
    })
    .catch((error) => {
      dispatch({
        type: SET_ERROR_SIGNUP,
        payload: error.response.data.message
      });
      console.log(error.response.data.message);
    });
};

export const logout = (history) => (dispatch) => {
  dispatch({ type: UI_LOADING });
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/logout")
    .then((response) => {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      dispatch({
        type: SET_UNAUTHENTICATED
      });
      dispatch({ type: CLEAR_ERROR });
      history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
