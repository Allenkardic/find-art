import {
  GET_ARTWORKS,
  GET_ARTWORK,
  BID_ARTWORK,
  MY_ARTWORKS,
  BID_MESSAGE,
  CLEAR_ERROR
} from '../actions/types';

const initialState = {
  singleArtwork: {},
  artworks: [],
  userArtworks: [],
  artworkbidMessage: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTWORK:
      return {
        ...state,
        singleArtwork: action.payload
      };

    case GET_ARTWORKS:
      return {
        ...state,
        artworks: action.payload
      };

    case BID_ARTWORK:
      return {
        ...state,
        artworkbidMessage: action.payload
      };
    case BID_MESSAGE:
      return {
        ...state,
        artworkbidMessage: action.payload
      };
    case MY_ARTWORKS:
      return {
        ...state,
        userArtworks: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
