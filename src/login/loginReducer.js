import { combineReducers } from 'redux';
import _ from 'lodash';

const initData = {
  name: {
    value: 123,
    error: 123
  }
};
export default combineReducers({
  form: function(state = initData, action) {
    let nextState = state;
    switch (action.type) {
      case 'FORM_SUBMIT':
        if (action.payload.name.indexOf('z') != -1) {
          return _.chain(state).
            set('name.value', action.payload.name).
            set('name.error', 'with z!!!').
            clone().
            value()
        } else {
          return {
            name: {
              value: '555',
              error: undefined
            }
          };
        } break;
      default: return nextState;
    }
    return nextState;
  }
})