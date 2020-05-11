import {
  UI_LOADING,
  UI_LOADING_NAV,
  UI_LOADING_ARTWORK,
  UI_LOADING_ARTWORKS,
  UI_LOADING_ARTWORK_BID,
  UI_LOADING_ARTWORK_BID_BUTTON,
  UI_LOADING_USERPROFILE,
  UI_LOADING_USERPROFILE_BUTTON,
  CLEAR_ERROR
} from '../actions/types';

const initialState = {
  ui_loading: false,
  ui_loading_nav: false,
  isFetching_artwork: false,
  isFetching_artworks: false,
  isFetching_artworkBid_button: false,
  isFetching_userprofile: false,
  isFetching_userprofile_button: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UI_LOADING:
      return {
        ...state,
        ui_loading: action.payload
      };

    case UI_LOADING_NAV:
      return {
        ...state,
        ui_loading_nav: action.payload
      };

    case UI_LOADING_ARTWORKS:
      return {
        ...state,
        isFetching_artworks: action.payload
      };

    case UI_LOADING_ARTWORK:
      return {
        ...state,
        isFetching_artwork: action.payload
      };

    case UI_LOADING_USERPROFILE:
      return {
        ...state,
        isFetching_userprofile: action.payload
      };

    case UI_LOADING_USERPROFILE_BUTTON:
      return {
        ...state,
        isFetching_userprofile_button: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
