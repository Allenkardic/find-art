/** @format */

import axios from 'axios';
import {
  CLEAR_ERROR,
  USER_PROFILE,
  USERS_PROFILE,
  UPDATE_PROFILE,
  UI_LOADING_USERPROFILE,
  UI_LOADING_USERPROFILE_BUTTON
} from './types';

// users signin, signup and logout functionalities
export const getUserData = () => dispatch => {
  dispatch({ type: UI_LOADING_USERPROFILE, payload: true });
  axios
    .get('https://findartt.herokuapp.com/api/v1/users')
    .then(response => {
      dispatch({ type: USER_PROFILE, payload: response.data.data });
      dispatch({ type: UI_LOADING_USERPROFILE, payload: false });
      dispatch({ type: CLEAR_ERROR });
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_USERPROFILE, payload: false });
      console.log(error);
    });
};

export const getUsersData = () => dispatch => {
  axios
    .get('https://findartt.herokuapp.com/api/v1/users/all')
    .then(response => {
      dispatch({ type: USERS_PROFILE, payload: response.data.data });
      dispatch({ type: CLEAR_ERROR });
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateUserProfile = (userUpdate, history) => dispatch => {
  dispatch({ type: UI_LOADING_USERPROFILE_BUTTON, payload: true });
  axios
    .post('https://findartt.herokuapp.com/api/v1/users/update', userUpdate)
    .then(() => {
      dispatch(getUsersData());
      dispatch({ type: UI_LOADING_USERPROFILE_BUTTON, payload: false });
      dispatch({ type: CLEAR_ERROR });
      history.push('/user/profile');
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_USERPROFILE_BUTTON, payload: false });
      console.log(error);
    });
};
