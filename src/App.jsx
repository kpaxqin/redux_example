import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import reducer from './reducer.js'
import routes from './routes.jsx';

import './index.scss'

const store = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk,
  createLogger()
)(createStore)(reducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer.js', () => {
    const nextRootReducer = require('./reducer.js').default;
    store.replaceReducer(nextRootReducer);
  });
}

const enhanceHistory = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
        >
        <Router history={enhanceHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
export default App;