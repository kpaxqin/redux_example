import 'babel-core/polyfill';
import React, {Component} from 'react'
import {render} from 'react-dom'
import App from './container/App'
import {Provider} from 'react-redux'
import store from './store';


if (module.hot) {
  module.hot.accept();
}

render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('app')
);