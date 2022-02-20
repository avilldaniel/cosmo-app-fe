import React, { useState, createContext, useContext } from 'react';

// create a context
export const TodoContext = createContext();

// provider
export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  )
}