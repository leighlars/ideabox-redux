import React from 'react'
import {connect} from 'react-redux'
import ToDo from './ToDo'

const ToDoList = ({todos}) => {
  const displayTodos = todos.map(todo => {
    return (
      <ToDo
      key={todo.id}
      {...todo}
      />
    )
  })  
  return(
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)