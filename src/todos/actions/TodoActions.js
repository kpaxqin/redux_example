/**
 * Created by jwqin on 11/16/15.
 */
import _ from 'lodash'

function addTodo(text){
  return {
    type: 'ADD_TODO',
    payload: text
  }
}
function addTodoCompleted(res){
  return {
    type: 'ADD_TODO_COMPLETED',
    payload: res
  }
}
function addTodoFailed(err){
  return {
    type: 'ADD_TODO_FAILED',
    payload: err
  }
}


export default {
  addTodo(text){
    //return {
    //  type: 'ADD_TODO',
    //  payload: text
    //}
    return function(dispatch, getState){
      addTodo(text);
      const todos = getState().todos;
      setTimeout(()=>{
        Math.random() > 0.5 ?
          dispatch(addTodoCompleted({
            id: _.reduce(todos, (max, item)=>Math.max(max, item.id), -1) + 1,
            text
          })):
          dispatch(addTodoFailed({}));
      }, 200)
    }
  },
  editTodo(id, todo){
    return {
      type: 'EDIT_TODO',
      payload: {
        id,
        todo
      }
    }
  },
  deleteTodo(id){
    return {
      type: 'DELETE_TODO',
      payload: {
        id
      }
    }
  }
}