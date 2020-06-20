import React, { useState, useRef, useEffect } from 'react';
import { Button, TextInput, Text, View, ImageBackground } from "react-native";
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import TaskList from "../components/Tasks/TaskList";

// import Async from "@react-native-community/async-storage";

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

function TaskScreen() {
  // object destructuring 
  // variable is an array with [all the tasks, function that allows us to update todos]
  // const [todos, setTodos] = useState([])
  // this hook lets us reference elements in our html, allows us access to input
  // const todoNameRef = useRef()

  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem("@storage_Key", value);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  // called to load our todos, only called once when component loads
  // pass in empty array and since empty array never changes, doesn't get called again
  // const getData = async () => {
  //   try {
  //     const storedTodos = await JSON.parse(AsyncStorage.getItem(LOCAL_STORAGE_KEY))
  //      if (storedTodos) setTodos(storedTodos)
  //   } catch(e) {
  //   // error reading value
  //   }
  // }
 
  // saves todo tasks to local storage
  // const storeData = async (JSON.stringify(todos)) => {
  //   try {
  //     await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  //   } catch (e) {
  //   // saving error
  //   }
  // }

  // function toggleTodo(id) {
  //   const newTodos = [...todos] 
  //   const todo = newTodos.find(todo => todo.id === id)
  //   todo.complete = !todo.complete
  //   setTodos(newTodos)
  // }
 
  // function handleAddTodo(e) {
  //   const name = todoNameRef.current.value
  //   if (name === '') return
  //   setTodos(prevTodos => {
  //     return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
  //   })
  //   // clears out input for us after
  //   todoNameRef.current.value = null
  // }

  // function handleClearTodos() {
  //   const newTodos = todos.filter(todo => !todo.complete)
  //   setTodos(newTodos)
  // }

  // state = {
  //   value: 'get react to work',
  // }

  // handleTextChange = (newText) => this.ListeningStateChangedEvent({value: newText})

  
  return (
    <>
      <ImageBackground
        source={backgroundImg}
        style={{ width: "100%" }}
      /> 
      {/* passing prop of todos */}
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} /> */}

      {/* <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <TextInput
        ref={todoNameRef}
        value={this.state.value}
        onChangetext={(text) => this.handleTextChange}
        style={{
          height: 26,
          fontSize: 20,
          color: "#000",
          borderBottomWidth: 1,
          borderBottomColor: "#555",
          marginTop: 70,
        }}
      /> */}
      {/* <Button title={"Add Task"} onPress={handleAddTodo} /> */}
      {/* <Button title={"Clear Completed Tasks"} onPress={handleClearTodos} /> */}
      <View>
        <TaskList/>
        {/* <Text>
          {todos.filter((todo) => !todo.complete).length} tasks to go!
        </Text> */}
      </View>
    </>
  );
} 

export default TaskScreen;
