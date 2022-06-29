import MoviesItem from 'components/MoviesItem';

import s from './MoviesItemList.module.scss';

const MoviesItemList = ({ movies, genres }) => {
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <MoviesItem key={movie.id} movie={movie} genres={genres} />
      ))}
    </ul>
  );
};

export default MoviesItemList;
