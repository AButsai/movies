import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { fetchMoviePopular, fetchGanres } from './moviesOperations';

const movies = createReducer([], {
  [fetchMoviePopular.fulfilled]: (state, { payload }) => {
    return [...state, ...payload];
  },
});

const ganres = createReducer([], {
  [fetchGanres.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

// const isLoading = createReducer(false, {});

export default combineReducers({
  movies,
  ganres,
  // isLoading,
});
