/**
 * Created by jwqin on 11/18/15.
 */
import {normalize, arrayOf, Schema} from 'normalizr'
import _ from 'lodash'

const userSchema = new Schema('user');
const todoSchema = new Schema('todo', {idAttribute: 'uuid'});

const todos = [
  {
    uuid: '123',
    text: '123'
  }
];

const resp = {
  pageIndex: 1,
  todos: todos
};

const user = {
  id: 111,
  token: 123,
  name: 'foo'
};

const formattedTodos = normalize(todos, arrayOf(todoSchema))

console.log('user', normalize(user, userSchema));
console.log('todos', formattedTodos);
console.log('convert todos back to array: ', formattedTodos.result.map((id)=>formattedTodos.entities.todo[id]))
console.log('resp', normalize(resp, {
  todos: arrayOf(todoSchema)
}));