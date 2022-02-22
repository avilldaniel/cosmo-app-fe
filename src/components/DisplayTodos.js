import React, { useContext, useEffect } from "react";
import TodoAPI from "../apis/TodoAPI";
import { TodoContext } from "../context/TodoContext";

const DisplayTodos = () => {
  const { todo, setTodo } = useContext(TodoContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET request for all todos
        // baseURL: http://localhost:4000/api/v1/todos
        const response = await TodoAPI.get("/"); // adds '/' to baseURL
        // console.log('response', response);
        setTodo(response.data);
        // console.log("todo:", todo);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  const listTodos = task => {
    return (
      <li key={task.id}
        className="flex justify-between py-4 px-3
            hover:bg-indigo-400 hover:bg-opacity-40
            hover:rounded-lg"
      >
        {task.todo}
        <div className="flex justify-between w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
            <line x1="3" y1="22" x2="21" y2="22"></line>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c8c8c8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </li>
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="justify-center w-full bg-indigo-400 bg-opacity-0 rounded-lg lg:w-3/4">
        <ul
          className="divide-y-2 divide-indigo-500 divide-opacity-60 hover:divide-indigo-900
          font-semibold text-2xl"
        >
          {todo && todo.map(listTodos)}
        </ul>
      </div>
    </div>
  );
};

export default DisplayTodos;
