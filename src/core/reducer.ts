import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


export interface IApplicationState {
  [x: string]: any;
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
  router: connectRouter(history),
});
