import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routeReducer} from 'react-router-redux';

export default combineReducers(
  {
    form: formReducer,
    routing: routeReducer
  }
);
