import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import { userPersistConfig } from './user/userPersistConfig';
import movieReducers from './movies/moviesReducers';
import userRedusers from './user/userSlice';
import { middleware } from './user/userMiddleware';

export const store = configureStore({
  reducer: {
    movies: movieReducers,
    user: persistReducer(userPersistConfig, userRedusers),
  },
  middleware,
});

// export default store;
export const persistor = persistStore(store);
