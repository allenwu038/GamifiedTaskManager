import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                {/* when we change the complete status of our checkbox, the handleTodoClick function is called with the id of the todo we're inside of, and that is passed to TodoList and then App.js*/}
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                {todo.name}
            </label>   
        </div>
    )
}