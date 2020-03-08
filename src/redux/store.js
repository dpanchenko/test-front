import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const middlewares = [
  sagaMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({ collapsed: true }));
}

const enhancers = [
  applyMiddleware(...middlewares),
];

const composeEnhancers =
  ['production', 'staging'].includes(process.env.NODE_ENV) &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  createReducer(),
  initialState,
  composeEnhancers(...enhancers),
);

store.runSaga = sagaMiddleware.run;
store.asyncReducers = {};

sagas.map(store.runSaga);

export const { dispatch, getState } = store;
export default store;
