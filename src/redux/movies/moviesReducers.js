import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { fetchMoviePopular } from './moviesOperations';

const movies = createReducer([], {
  [fetchMoviePopular.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
});

// const isLoading = createReducer(false, {});

export default combineReducers({
  movies,
  // isLoading,
});
