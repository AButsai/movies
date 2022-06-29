import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/moviesAPI/moviesAPI';

export const fetchMoviePopular = createAsyncThunk(
  'movies/getMovies',
  async (_, { rejectWithValue }) => {
    try {
      const movies = await API.getPopularMovies();
      return movies;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchGanres = createAsyncThunk(
  'movies/getGanres',
  async (_, { rejectWithValue }) => {
    try {
      const ganres = await API.getGanres();
      return ganres;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
