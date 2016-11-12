import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';
import notifications from './notifications-reducer';
import settings from './settings-reducer';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

//What's the recommended way of starting a store that has defaults like settings?
export default function (initialStore={}) {
  const reducer = combineReducers({
    notifications,
    settings
  });
  let middleware = [thunkMiddleware, loggerMiddleware()];
  return compose(
    applyMiddleware(...middleware)
  )(createStore)(reducer, initialStore);
}
