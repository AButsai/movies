import {
  sliceGenres,
  releaseData,
  sortGenres,
  posterPath,
  popularityToFixed,
} from 'helpers/helpers';

import s from './MovieItem.module.scss';

const createElementP = (title = '', value) => {
  return (
    <li className={s.filmСharacterizationItem}>
      <p className={s.filmСharacterizationTitle}>{title}</p>
      <p className={s.filmСharacterizationValue}>{value}</p>
    </li>
  );
};

const MovieItem = ({ movie, genres }) => {
  console.log('movie :>> ', movie);
  const {
    id,
    poster_path,
    title,
    release_date,
    genre_ids,
    overview,
    original_title,
    popularity,
    vote_average,
    vote_count,
  } = movie;

  return (
    <li key={id} className={s.item}>
      <img className={s.img} src={posterPath(poster_path)} alt={title} />
      <div className={s.wrapTitle}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.subtitle}>
          {sliceGenres(sortGenres(genres, genre_ids))}
          <span className={s.span}> | </span>
          {releaseData(release_date)}
        </p>
      </div>
      <div className={s.backdrop}>
        <h3 className={s.backdropTitle}>{title}</h3>
        <ul>
          {createElementP('Vote / Votes', `${vote_average} / ${vote_count}`)}
          {createElementP('Popularity', popularityToFixed(popularity))}
          {createElementP('Original Title', original_title)}
          {createElementP('Ganres', sortGenres(genres, genre_ids).join(', '))}
        </ul>

        <p className={s.backdropAbout}>ABOUT</p>
        <p className={s.backdropOverview}>{overview}</p>
        <button className={s.backdropBtnWathed} type="botton">
          Watched
        </button>
        <button className={s.backdropBtnQueue} type="botton">
          Queue
        </button>
      </div>
    </li>
  );
};

export default MovieItem;
