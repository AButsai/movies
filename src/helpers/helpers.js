export const PATH_IMAGE = 'https://image.tmdb.org/t/p/w1280';
export const DEFAULT_IMAGE =
  'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805__340.png';

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

  return 'https://github.com/AButsai/moove/blob/main/src/images/plug.jpg?raw=true';
};

export function popularityToFixed(num) {
  return num.toFixed(1);
}
