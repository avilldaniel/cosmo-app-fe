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
      <div className="flex justify-center">
        <div className="mb-3 mt-8">
          <form action="submit" onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              value={task}
              onChange={e => setTask(e.target.value)}
              placeholder='Ex. Daniel clean cage 2.'
              className='pb-1 pt-2 border-b-2 border-gray-200 outline-none focus:border-gray-200
              text-white bg-transparent text-center placeholder-slate-300 text-3xl
              caret-pink-600 flex sm:w-96 lg:w-80vh'
            />
          </form>


        </div>
      </div>
  );
}
