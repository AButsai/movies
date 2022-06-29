import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMoviePopular, fetchGanres } from 'redux/movies/moviesOperations';
import { allMovies, allGenres } from 'redux/movies/moviesSelectors';
import MoviesItemsList from 'components/MoviesItemsList';

const PopularMovies = () => {
  const popularMovie = useSelector(allMovies);
  const genres = useSelector(allGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviePopular());
    dispatch(fetchGanres());
  }, [dispatch]);

  return <MoviesItemsList movies={popularMovie} genres={genres} />;
};

export default PopularMovies;
