import React, { useContext, useState } from "react";
import TodoAPI from "../apis/TodoAPI";
import { TodoContext } from "../context/TodoContext";

const DisplayModal = ({ id, todo, setModal }) => {
  const [newTask, setNewTask] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await TodoAPI.put(`/${id}`, {
        todo: newTask,
      })
      setModal(false);
      const response = await TodoAPI.get("/"); // GET all todos
      setTodos(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 max-w-3xl my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 mb-2 border-b border-blue-400">
              <h3 className="text-3xl font-semibold">Edit To-Do</h3>
            </div>

            {/*body*/}
            <div className="flex justify-center py-8">
              <form action="submit" onSubmit={handleUpdate}>
                <input
                  autoFocus
                  type="text"
                  placeholder={todo}
                  className="flex w-52 sm:w-72 lg:w-96 px-2 py-1 text-black rounded-md border-2 border-blue-400"
                  onChange={e => setNewTask(e.target.value)}
                />
              </form>
            </div>

            {/*footer*/}
            <div className="flex items-end justify-between sm:px-9 sm:py-6 lg:justify-end">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModal(false)}
              >
                Close
              </button>
              <button
                className=" bg-indigo-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                // onClick={() => handleUpdate(id)}
                onClick={handleUpdate}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default DisplayModal;
