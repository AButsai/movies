import { configureStore } from '@reduxjs/toolkit';

import movieReducers from './movies/moviesReducers';

const store = configureStore({
  reducer: {
    movies: movieReducers,
  },
});

export default store;
