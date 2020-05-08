import { UI_LOADING, CLEAR_ERROR } from '../actions/types';

const initialState = {
  ui_loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UI_LOADING:
      return {
        ...state,
        ui_loading: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
