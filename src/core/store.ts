import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducer';
import { persistConfig } from './config';

export const history = createBrowserHistory();

/* Middleware Configuration */

const logger = createLogger({
  collapsed: true,
  level: 'info',
});

/* Redux Devtools Configuration */

const options = {};
const composeEnhancers = composeWithDevTools(options);

const getStore = (reducer: any, storeMode: string) => {
  // Dev store, needs compose enhancers,
  // Only use redux devtools in dev mode as it is expensive
  if (storeMode === 'dev') {
    return createStore(
      reducer,
      composeEnhancers(
        applyMiddleware(
          routerMiddleware(history), logger
        )
      )
    );
  }
  // Prod Store
  return createStore(
    reducer,
    applyMiddleware(
      routerMiddleware(history)
    )
  );
};

interface IConfiguredStore {
  store: any;
  persistor: any;
}

export default function configureStore(mode: 'dev' | 'prod' = 'dev'): IConfiguredStore {
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = getStore(persistedReducer, mode);
  const persistor = persistStore(store, {}, () => {});
  return { store, persistor };
}

