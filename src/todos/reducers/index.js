/**
 * Created by jwqin on 11/15/15.
 */
import {combineReducers} from 'redux'
import _ from 'lodash'

export default combineReducers({
  todos: function (state = [], action){
    const {type, payload, error} = action;
    switch (type){
      case 'ADD_TODO_COMPLETED':
        return [
          payload,
          ...state
        ];
      case 'EDIT_TODO':
        return _.map(state, (item)=> item.id === payload.id ? payload.todo: item);
      case 'DELETE_TODO':
        return _.filter(state, (item)=>item.id !== payload.id);
    }
    return state;
  }
})