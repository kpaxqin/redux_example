import 'babel-polyfill'
import {render} from 'react-dom'
import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import routes from './routes.jsx'
import reducer from './reducer'
import './index.scss'

const store = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk,
  createLogger()
)(createStore)(reducer);

const enhancedHistory = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={enhancedHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);


if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}