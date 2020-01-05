import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR_LOGIN,
  SET_ERROR_SIGNUP,
  UI_LOADING,
  UI_NOLOADING,
  CLEAR_ERROR
} from '../actions/types';

const initialState = {
  authenticated: false,
  ui_loading: false,
  errors_login: null,
  errors_signup: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        ui_loading: false,
        authenticated: true
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        errors_login: null,
        ui_loading: false
      };

    case SET_ERROR_LOGIN:
      return {
        ...state,
        errors_login: action.payload,
        ui_loading: false
      };

    case SET_ERROR_SIGNUP:
      return {
        ...state,
        errors_signup: action.payload,
        ui_loading: false
      };

    case UI_LOADING:
      return {
        ...state,
        ui_loading: true
      };

    case UI_NOLOADING:
      return {
        ...state,
        ui_loading: false
      };

    case CLEAR_ERROR:
      return {
        ...state,
        ui_loading: false
      };

    default:
      return state;
  }
}
