import { addWatched, addQueue } from 'helpers/addingAMovieToTheLibrary';

import s from './MovieItem.module.scss';

const ButtonForBackdrop = ({ movieId }) => {
  return (
    <>
      <button
        className={s.backdropBtnWathed}
        type="botton"
        onClick={() => addWatched(movieId)}
      >
        Watched
      </button>
      <button
        className={s.backdropBtnQueue}
        type="botton"
        onClick={() => addQueue(movieId)}
      >
        Queue
      </button>
    </>
  );
};

export default ButtonForBackdrop;
