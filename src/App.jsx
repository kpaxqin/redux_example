import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { syncHistory } from 'react-router-redux'
import reducer from './reducer.js'
import routes from './routes.jsx';

import './index.scss'

const historyMiddleWare = syncHistory(routes.history);

const store = applyMiddleware(
  thunk,
  historyMiddleWare,
  createLogger()
)(createStore)(reducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer.js', () => {
    const nextRootReducer = require('./reducer.js').default;
    store.replaceReducer(nextRootReducer);
  });
}

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
        >
        <div>
          {routes.routes}
        </div>
      </Provider>
    );
  }
}
export default App;