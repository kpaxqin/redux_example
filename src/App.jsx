import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { syncHistory, routeReducer } from 'react-router-redux'
import reducer from './reducer.js'

import {routes, history} from './routes.jsx';
import './index.scss'

const historyMiddleWare = syncHistory(history);

const store = applyMiddleware(
  thunk,
  historyMiddleWare,
  createLogger()
)(createStore)(reducer);

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
        >
        <div>
          {routes}
        </div>
      </Provider>
    );
  }
}
export default App;