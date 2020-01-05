import axios from 'axios';
import {
  CLEAR_ERROR,
  USER_PROFILE,
  USERS_PROFILE,
  UPDATE_PROFILE
} from './types';

// users signin, signup and logout functionalities
export const getUserData = () => dispatch => {
  axios
    .get('/users')
    .then(response => {
      dispatch({ type: USER_PROFILE, payload: response.data.data });
      dispatch({ type: CLEAR_ERROR });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getUsersData = () => dispatch => {
  axios
    .get('/users/all')
    .then(response => {
      dispatch({ type: USERS_PROFILE, payload: response.data.data });
      dispatch({ type: CLEAR_ERROR });
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateProfile = (userUpdate, history) => dispatch => {
  axios
    .post('/users/update', userUpdate)
    .then(response => {
      dispatch({ type: UPDATE_PROFILE, payload: response.data.data });
      dispatch({ type: CLEAR_ERROR });
      history.push('/user/profile');
    })
    .catch(error => {
      console.log(error);
    });
};
