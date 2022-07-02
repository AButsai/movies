export const KEY_WATCHED = 'watched';
export const KEY_QUEUE = 'queue';
export const KEY_IS_AUTH = 'isAuth';

export const PATH_IMAGE = 'https://image.tmdb.org/t/p/w1280';
export const DEFAULT_IMAGE =
  'https://github.com/AButsai/moove/blob/main/src/images/plug.jpg?raw=true';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export function releaseData(str) {
  return str.substr(0, 4);
}

export function sliceGenres(data) {
  if (data.length > 2) {
    const str = data.slice(0, 2).join(', ');
    return str + ', Others';
  }

  return data.slice(0, 2).join(', ');
}

export const sortGenres = (genres, genreId) => {
  const genresArray = [];
  for (const genId of genreId) {
    genres.filter(({ id, name }) => id === genId && genresArray.push(name));
  }
  return genresArray;
};

export const posterPath = poster => {
  if (poster) {
    return PATH_IMAGE + poster;
  }

  return DEFAULT_IMAGE;
};

export function popularityToFixed(num) {
  return num.toFixed(1);
}
