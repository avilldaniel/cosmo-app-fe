import React, { useContext } from "react";
import WriteTodo from "../components/WriteTodo";
import DisplayTodos from "../components/DisplayTodos";
import { TodoProvider } from "../context/TodoContext";

export default function Todo() {

  return (
    <TodoProvider>
      <div className="flex justify-center text-white">
        Assets To-Do
      </div>

      <WriteTodo />
      <DisplayTodos />
    </TodoProvider>
  );
}
