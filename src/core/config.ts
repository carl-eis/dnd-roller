import createEncryptor from 'redux-persist-transform-encrypt';

import storage from 'redux-persist/lib/storage';

export const encryptor = createEncryptor({
  secretKey: 'test-key',
  onError: () => {
    localStorage.clear();
    window.location.reload();
  },
});


export const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  transforms: [encryptor],
  throttle: 1000,
};
