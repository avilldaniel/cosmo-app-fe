import React, { useState, createContext, useContext } from 'react';

// create a context
export const TodoContext = createContext();

// provider
export const TodoProvider = (props) => {
  // used to store all our todos
  const [todos, setTodos] = useState([]);

  // used when new todo is added, so as to re-render page
  const updatedTodos = (task) => {
    setTodos([...todos, task]);
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos, updatedTodos }}>
      {props.children}
    </TodoContext.Provider>
  )
}