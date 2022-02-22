import React, { useState, createContext, useContext } from 'react';

// create a context
export const TodoContext = createContext();

// provider
export const TodoProvider = (props) => {
  // used to store all our todos
  const [todo, setTodo] = useState([]);

  // used when new todo is added, so as to re-render page
  const addedTodo = (task) => {
    setTodo([...todo, task]);
  }

  return (
    <TodoContext.Provider value={{ todo, setTodo, addedTodo }}>
      {props.children}
    </TodoContext.Provider>
  )
}