import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import Router from '../router';
import configureStore, { history } from '../store';
const { persistor, store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <ConnectedRouter history={history}>
            <Router />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
