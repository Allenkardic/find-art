import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR_LOGIN,
  SET_ERROR_SIGNUP,
  // UI_LOADING,
  CLEAR_ERROR
} from '../actions/types';

const initialState = {
  authenticated: false,
  errors_login: null,
  errors_signup: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        errors_login: null
      };

    case SET_ERROR_LOGIN:
      return {
        ...state,
        errors_login: action.payload
      };

    case SET_ERROR_SIGNUP:
      return {
        ...state,
        errors_signup: action.payload
      };

    // case UI_LOADING:
    //   return {
    //     ...state,
    //     ui_loading: action.payload
    //   };

    case CLEAR_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
