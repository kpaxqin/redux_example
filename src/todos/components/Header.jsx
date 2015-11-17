import React , {Component} from 'react'
import TodoInput from './TodoInput.js'

class Header extends Component{
  render(){
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoInput
          newTodo
          placeholder="what needs to be done?"
          onSave={this.props.onAddTodo}
          />
      </header>
    )
  }
}
export default Header