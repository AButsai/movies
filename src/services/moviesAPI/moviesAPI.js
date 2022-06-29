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

export const getMoviesSearch = async query => {
  try {
    const {
      data: { results },
    } = await getMovies('search/movie', { params: { query } });

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getGanres = async () => {
  try {
    const {
      data: { genres },
    } = await getMovies('/genre/movie/list', {});
    return genres;
  } catch (error) {
    return Promise.reject('There is no information about the movie yet...');
  }
};
