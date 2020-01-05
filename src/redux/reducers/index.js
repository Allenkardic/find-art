// redux and persistReducer stuffs
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// files from my reducers stuffs
import authReducer from './authReducer';
import userReducer from './userReducer';
import artworkReducer from './artworkReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  artwork: artworkReducer
});

export default persistReducer(persistConfig, rootReducer);
