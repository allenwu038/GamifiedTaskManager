import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos , toggleTodo}) {
    { /* for each of our todos, return a todo component with unique key (its name) */ }
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo = {todo} />
        })
    )
}