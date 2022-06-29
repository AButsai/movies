import { useSelector } from 'react-redux';

import { allGenres, allSearchMovies } from 'redux/movies/moviesSelectors';
import MoviesItemsList from 'components/MoviesItemsList';

const FaundMovies = () => {
  const searchMovies = useSelector(allSearchMovies);
  const genres = useSelector(allGenres);

  return <MoviesItemsList movies={searchMovies} genres={genres} />;
};

export default FaundMovies;
