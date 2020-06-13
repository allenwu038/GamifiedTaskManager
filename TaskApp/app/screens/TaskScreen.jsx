import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Tasks() {
  // object destructuring 
  // variable is an array with [all the tasks, function that allows us to update todos]
  const [todos, setTodos] = useState([])
  // this hook lets us reference elements in our html, allows us access to input
  const todoNameRef = useRef()

  // called to load our todos, only called once when component loads
  // pass in empty array and since empty array never changes, doesn't get called again
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)

  }, [])
 
  // saves todo tasks to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos] 
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
 
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    // clears out input for us after
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  
  return (
    < >
      { /* passing prop of todos */ }
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Task </button>
      <button onClick={handleClearTodos}> Clear Completed Tasks</button>
      <div> {todos.filter(todo => !todo.complete).length} tasks to go! </div>
    </>
  )
} 

export default Tasks;
