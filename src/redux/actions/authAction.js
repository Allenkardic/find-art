/** @format */

import axios from 'axios';

import {
  //   authentication stuffs
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR_LOGIN,
  SET_ERROR_SIGNUP,
  UI_LOADING,
  CLEAR_ERROR
} from './types';
import { notification } from 'antd';

export const googleSignin = history => dispatch => {
  dispatch({ type: UI_LOADING });
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/login/google')
    .then(response => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem('token', userToken);
      axios.defaults.headers.common.Authorization = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERROR });
      history.push('/artworks');
    })
    .catch(error => {
      console.log(error.response.data.message);
      dispatch({ type: SET_ERROR_LOGIN, payload: error.response.data.message });
    });
};

export const signinUser = (existingUser, history) => dispatch => {
  dispatch({ type: UI_LOADING, payload: true });
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/login', existingUser)
    .then(response => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem('token', userToken);
      axios.defaults.headers.common.Authorization = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERROR });
      dispatch({ type: UI_LOADING, payload: false });
      history.push('/artworks');
    })
    .catch(error => {
      dispatch({ type: UI_LOADING, payload: false });
      console.log(error.response.data.message);
      notification.error({
        message: 'Invalid details',
        description: error.response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
      dispatch({ type: SET_ERROR_LOGIN, payload: error.response.data.message });
    });
};

export const signupUser = (newUser, history) => dispatch => {
  dispatch({ type: UI_LOADING, payload: true });
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/signup', newUser)
    .then(response => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem('token', userToken);
      axios.defaults.headers.common.Authorization = userToken;
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERROR });
      dispatch({ type: UI_LOADING, payload: false });
      history.push('/artworks');
    })
    .catch(error => {
      dispatch({ type: UI_LOADING, payload: false });
      dispatch({
        type: SET_ERROR_SIGNUP,
        payload: error.response.data.message
      });
      notification.error({
        message: 'Invalid details',
        description: error.response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
      console.log(error.response.data.message);
    });
};

export const logout = () => dispatch => {
  axios
    .post('https://findartt.herokuapp.com/api/v1/auth/logout')
    .then(response => {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      dispatch({
        type: SET_UNAUTHENTICATED
      });
      dispatch({ type: CLEAR_ERROR });
      // history.push('/');
    })
    .catch(error => {
      notification.error({
        message: 'Error',
        description: error.response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
      console.log(error);
    });
};
