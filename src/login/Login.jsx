import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import { routeActions } from 'react-router-redux'
import LoginForm from './LoginForm.jsx'

const style = {
  width: 500,
  marginTop: 200
};

class Login extends Component {
  onSubmit(data) {
    console.log(data, 'submit');
    this.props.push('/dashboard')
  }
  render() {
    return (
      <div className="login container" style={style}>
        <LoginForm
          onSubmit={this.onSubmit.bind(this)}
          />
      </div>
    );
  }
}

export default connect(function(state) {

  return state.login;
}, routeActions)(Login);