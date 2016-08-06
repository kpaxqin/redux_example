import React, {Component} from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createHashHistory from 'history/lib/createHashHistory.js'
import Login from './login/Login.jsx'
import Dashboard from './dashboard/Index.jsx';

const history = createHashHistory();

class App extends Component {
  render() {
    return <div>app <div>{this.props.children}</div></div>
  }
}

const routes = (
  <Router history={history} >
    <Route
      path='/'
      component={App}
      >
      <Route
        path='login'
        component={Login}
        />
      <Route
        path='dashboard'
        component={Dashboard}
        />
      <IndexRoute component={Login}/>
    </Route>
  </Router>
);

export default {routes, history};