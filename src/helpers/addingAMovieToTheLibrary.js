import { KEY_WATCHED, KEY_QUEUE } from './helpers';

const addLocalStorage = (key, id) => {
  localStorage.setItem(key, JSON.parse(id));
};

export const addWatched = id => {
  console.log('id :>> ', id);
  addLocalStorage(KEY_WATCHED, id);
};

export const addQueue = id => {
  console.log('id :>> ', id);
  addLocalStorage(KEY_QUEUE, id);
};
