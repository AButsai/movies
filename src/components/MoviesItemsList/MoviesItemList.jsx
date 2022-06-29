import { useSelector } from 'react-redux';

import MoviesItem from 'components/MoviesItem';
import { allMovies, allGanres } from 'redux/movies/moviesSelectors';

import s from './MoviesItemList.module.scss';

const MoviesItemList = () => {
  const popularMovie = useSelector(allMovies);
  const ganres = useSelector(allGanres);

  return (
    <ul className={s.list}>
      {popularMovie.length > 0 &&
        popularMovie.map(movie => (
          <MoviesItem key={movie.id} movie={movie} ganres={ganres} />
        ))}
    </ul>
  );
};

export default MoviesItemList;
