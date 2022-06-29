import { PATH_IMAGE, sliceGenres, releaseData } from 'helpers/helpers';

import s from './MovieItem.module.scss';

const sortGenres = (genres, genreId) => {
  const genresArray = [];
  for (const genId of genreId) {
    genres.filter(({ id, name }) => id === genId && genresArray.push(name));
  }
  return genresArray;
};

const posterPath = poster => {
  if (poster) {
    return PATH_IMAGE + poster;
  }

  return 'https://github.com/AButsai/moove/blob/main/src/images/plug.jpg?raw=true';
};

const MovieItem = ({ movie, ganres }) => {
  const { id, poster_path, title, release_date, genre_ids } = movie;

  return (
    <li key={id} className={s.item}>
      <img className={s.img} src={posterPath(poster_path)} alt={title} />
      <div className={s.wrapTitle}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.subtitle}>
          {sliceGenres(sortGenres(ganres, genre_ids))}
          <span className={s.span}> | </span>
          {releaseData(release_date)}
        </p>
      </div>
    </li>
  );
};

export default MovieItem;
