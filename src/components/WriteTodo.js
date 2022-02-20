import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';

export default function WriteTodo() {
  const [todo, setTodo] = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();

    // handle POST request
    
  };
  

  return (
      <div className="flex justify-center bg-gray-900">
        <div className="mb-3">
          <form action="submit" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={e => setTodo(e.target.value)}
              placeholder='Ex. Daniel clean cage 2.'
              className='w-96 pb-1 pt-2 border-b-2 border-gray-200 outline-none focus:border-gray-200
              text-white bg-transparent text-center placeholder-slate-400
              caret-fuchsia-500'
            />
          </form>


        </div>
      </div>
  );
}
