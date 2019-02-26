import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import diceReducer, { IDiceReducerState } from '~/modules/dice-reducer';

export interface IApplicationState {
  diceReducer: IDiceReducerState;
}

const initialState = {};

const rootReducer = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default (history: any) => combineReducers({
  rootReducer,
  diceReducer,
  router: connectRouter(history),
});
