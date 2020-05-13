/** @format */

import axios from 'axios';
import {
  GET_ARTWORKS,
  GET_ARTWORK,
  BID_ARTWORK,
  BID_MESSAGE,
  MY_ARTWORKS,
  CLEAR_ERROR,
  UI_LOADING,
  UI_LOADING_ARTWORK,
  UI_LOADING_ARTWORKS,
  UI_LOADING_ARTWORK_BID,
  UI_LOADING_ARTWORK_BID_BUTTON,
  UI_LOADING_MYARTWORKS,
  UI_LOADING_MYARTWORK_DETAILS,
  UI_LOADING_ARTWORK_DELETE,
  CREATE_ARTWORK
} from './types';
// import { getUserData } from '../actions/userAction';
import { notification } from 'antd';

export const getArtworks = () => dispatch => {
  dispatch({ type: UI_LOADING_ARTWORKS, payload: true });
  axios
    .get('https://findartt.herokuapp.com/api/v1/art/find')
    .then(response => {
      dispatch({ type: GET_ARTWORKS, payload: response.data.data });
      dispatch({ type: UI_LOADING_ARTWORKS, payload: false });
      console.log(response.data.data);
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_ARTWORKS, payload: false });
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const getArtwork = id => dispatch => {
  dispatch({ type: UI_LOADING_ARTWORK, payload: true });
  // getUserData();
  axios
    .get(`https://findartt.herokuapp.com/api/v1/art/find/${id}/summary`)
    .then(response => {
      dispatch({ type: GET_ARTWORK, payload: response.data.data });
      dispatch({ type: UI_LOADING_ARTWORK, payload: false });
      console.log(response.data.data);
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_ARTWORK, payload: false });
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const artworkBid = bid => dispatch => {
  dispatch({ type: UI_LOADING_ARTWORK_BID_BUTTON, payload: true });
  axios
    .post('https://findartt.herokuapp.com/api/v1/art/bid', bid)
    .then(response => {
      dispatch({ type: BID_ARTWORK, payload: response.data.message });
      console.log('bid', response.data.message);
      dispatch({ type: UI_LOADING_ARTWORK_BID_BUTTON, payload: false });
      notification.success({
        message: 'Bid successful',
        description: response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_ARTWORK_BID_BUTTON, payload: false });
      dispatch({ type: BID_MESSAGE, payload: error.response.data.message });
      notification.error({
        message: 'Bid failed',
        description: error.response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
      console.log(error.response.data.message);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const myArtworks = () => dispatch => {
  dispatch({ type: UI_LOADING_MYARTWORKS, payload: true });
  axios
    .get('https://findartt.herokuapp.com/api/v1/art/owner/find')
    .then(response => {
      dispatch({ type: MY_ARTWORKS, payload: response.data.data });
      dispatch({ type: UI_LOADING_MYARTWORKS, payload: false });
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_MYARTWORKS, payload: false });
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const createArtwork = artwork => dispatch => {
  axios
    .post('https://findartt.herokuapp.com/api/v1/art/create', artwork)
    .then(response => {
      notification.success({
        message: 'Artwork created',
        description: response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
      dispatch({ type: CREATE_ARTWORK, payload: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const deleteMyartwork = (id, history) => dispatch => {
  dispatch({ type: UI_LOADING_ARTWORK_DELETE, payload: true });
  axios
    .delete(`https://findartt.herokuapp.com/api/v1/art/delete/${id}`)
    .then(response => {
      notification.success({
        message: 'MyArtwork Deleted',
        description: response.data.message,
        placement: 'topRight',
        duration: 10,
        rtl: true
      });
      dispatch({ type: UI_LOADING_ARTWORK_DELETE, payload: false });
      history.push('/user/myartworks');
      // dispatch({ type: CREATE_ARTWORK, payload: response.data.message });
    })
    .catch(error => {
      dispatch({ type: UI_LOADING_ARTWORK_DELETE, payload: false });
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};
