import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import initRedux from './init-redux.es6';
import { updateRefreshDelay } from './settings-action-creators.es6'
require('./style.css');

const initialState = window.__INITIAL_STATE;
const store = initRedux(initialState);

store.subscribe(() => {
  console.log("Store updated", store.getState());
  // if not using React, do something here
});

store.dispatch(updateRefreshDelay(15));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('react-content')
);
