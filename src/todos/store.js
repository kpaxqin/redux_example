import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import loadingMiddleWare from './middlewares/loadingMiddleWare'

const store = applyMiddleware(
  thunk,
  loadingMiddleWare,
  createLogger()
)(createStore)(combineReducers(reducers), {todos: [{text: 'fff123', id: 1}]});

if (module.hot) {
  module.hot.accept(['./reducers'], () => {
    const nextReducers = require('./reducers');
    store.replaceReducer(nextReducers);
  })
}

export default store