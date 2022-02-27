import React, { useContext, useEffect, useState } from "react";
import TodoAPI from "../apis/TodoAPI";
import { TodoContext } from "../context/TodoContext";
import DisplayModal from "./DisplayModal";

const DisplayTodos = () => {
  const [modal, setModal] = useState({
    showModal: false,
    updateID: "",
    updateTask: "",
  });
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET request for all todos
        // baseURL: http://localhost:4000/api/v1/todos
        const response = await TodoAPI.get("/"); // adds '/' to baseURL
        setTodos(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await TodoAPI.delete(`/${id}`);
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const listTodos = (task) => {
    return (
      <li
        key={task.id}
        className="flex justify-between p-4
            hover:bg-indigo-400 hover:bg-opacity-40
            hover:rounded-lg"
      >
        {task.todo}
        <div className="flex justify-between w-14">
          <button
            onClick={() =>
              setModal({
                showModal: true,
                updateID: task.id,
                updateTask: task.todo,
              })
            }
          >
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
              <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
              <line x1="3" y1="22" x2="21" y2="22"></line>
            </svg>
          </button>
          {modal.showModal ? (
            <DisplayModal
              id={modal.updateID}
              todo={modal.updateTask}
              setModal={setModal}
            />
          ) : null}

          <button onClick={() => handleDelete(task.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ca152b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-indigo-400 bg-opacity-0 rounded-lg lg:w-3/4 xl:max-w-4xl">
        <ul
          className="divide-y-2 divide-indigo-500 divide-opacity-60 hover:divide-indigo-900
          font-script text-2xl text-slate-300
          "
        >
          {todos && todos.map(listTodos)}
        </ul>
      </div>
    </div>
  );
};

export default DisplayTodos;
