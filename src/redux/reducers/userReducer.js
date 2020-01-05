import {
  CLEAR_ERROR,
  USER_PROFILE,
  USERS_PROFILE,
  UPDATE_PROFILE
} from '../actions/types';

const initialState = {
  usersProfile: [],
  userProfile: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };

    case USERS_PROFILE:
      return {
        ...state,
        usersProfile: action.payload
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        usersProfile: state.usersProfile.map(userProfile =>
          userProfile.id === action.payload.id
            ? (userProfile = action.payload)
            : userProfile
        )
      };

    case CLEAR_ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
}
