import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchMoviePopular,
  fetchGanres,
  fetchMoviesSearch,
} from './moviesOperations';

const movies = createReducer([], {
  [fetchMoviesSearch.pending]: () => [],
  [fetchMoviePopular.fulfilled]: (state, { payload }) => {
    return [...state, ...payload];
  },
});

const searchMovies = createReducer([], {
  [fetchMoviePopular.pending]: () => [],
  [fetchMoviesSearch.fulfilled]: (state, { payload }) => {
    return [...state, ...payload];
  },
});

const genres = createReducer([], {
  [fetchGanres.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

// const search = createReducer('', {
//   [movieSearchActions]: (_, { payload }) => {
//     return payload;
//   },
// });

// const isLoading = createReducer(false, {});

export default combineReducers({
  movies,
  genres,
  searchMovies,
  // search,
  // isLoading,
});
