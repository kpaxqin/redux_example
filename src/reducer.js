import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routeReducer} from 'redux-simple-router';

import loginReducer from './login/loginReducer.js'
export default combineReducers(
  {
    form: formReducer,
    login: loginReducer,
    routing: routeReducer
  }
);
