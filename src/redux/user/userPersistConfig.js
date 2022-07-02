import storage from 'redux-persist/lib/storage';
import { KEY_IS_AUTH } from 'helpers/helpers';

export const userPersistConfig = {
  key: KEY_IS_AUTH,
  storage,
};
