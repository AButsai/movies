import {
  sliceGenres,
  releaseData,
  sortGenres,
  posterPath,
  popularityToFixed,
} from 'helpers/helpers';

import ButtonForBackdrop from './ButtonForBackdrop';

import s from './MovieItem.module.scss';

const createElementP = (title, value) => {
  return (
    <li className={s.film–°haracterizationItem}>
      <p className={s.film–°haracterizationTitle}>{title}</p>
      <p className={s.film–°haracterizationValue}>{value}</p>
    </li>
  );
};

const MovieItem = ({ movie, genres }) => {
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
        <ButtonForBackdrop movieId={id} />
      </div>
    </li>
  );
};

export default MovieItem;
