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
  CREATE_ARTWORK
} from './types';

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
  dispatch({ type: UI_LOADING });
  axios
    .post('https://findartt.herokuapp.com/api/v1/art/bid', bid)
    .then(response => {
      dispatch({ type: BID_ARTWORK, payload: response.data.message });
      console.log('bid', response.data.message);
    })
    .catch(error => {
      dispatch({ type: BID_MESSAGE, payload: error.response.data.message });
      console.log(error.response.data.message);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const myArtworks = () => dispatch => {
  dispatch({ type: UI_LOADING });
  axios
    .get('https://findartt.herokuapp.com/api/v1/art/owner/find')
    .then(response => {
      dispatch({ type: MY_ARTWORKS, payload: response.data.data });
    })
    .catch(error => {
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};

export const createArtwork = artwork => dispatch => {
  axios
    .post('https://findartt.herokuapp.com/api/v1/art/create', artwork)
    .then(response => {
      dispatch({ type: CREATE_ARTWORK, payload: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  dispatch({ type: CLEAR_ERROR });
};
