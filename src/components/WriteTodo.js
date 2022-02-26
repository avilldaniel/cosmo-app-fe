import React, { useContext, useState } from 'react';
import TodoAPI from '../apis/TodoAPI';
import { TodoContext } from '../context/TodoContext';

export default function WriteTodo() {
  const { updatedTodos } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // handle POST request
      const response = await TodoAPI.post('/', {
        todo: task
      });
      // console.log(response.data);
      updatedTodos(response.data);
      setTask("");
    } catch (err) {
      console.error(err.message);
    }
  };
  

  return (
      <div className="flex justify-center bg-gray-900">
        <div className="mb-3">
          <form action="submit" onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              value={task}
              onChange={e => setTask(e.target.value)}
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
