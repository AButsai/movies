import { getMovies } from './configMoviesAPI';

export const getPopularMovies = async () => {
  try {
    const {
      data: { results },
    } = await getMovies('/movie/popular', {});

    return results;
  } catch (error) {
    return Promise.reject('There is no information about the movie yet...');
  }
};

export const getMovie = async name => {
  try {
    const {
      data: { results },
    } = await getMovies('/search/movie', {
      params: { query: name },
    });

    return results;
  } catch (error) {
    return Promise.reject('There is no information about the movie yet...');
  }
};

export const getMovieDetails = async id => {
  try {
    const { data } = await getMovies(`movie/${id}`, {});

    return data;
  } catch (error) {
    return Promise.reject('There is no information about the movie yet...');
  }
};

export const getMoviesInfo = async (id, param) => {
  try {
    const { data } = await getMovies(`movie/${id}/${param}`, {});

    return data;
  } catch (error) {
    return Promise.reject('There is no information about the movie yet...');
  }
};
