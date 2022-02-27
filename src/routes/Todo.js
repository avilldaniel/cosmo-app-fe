import React, { useContext } from "react";
import WriteTodo from "../components/WriteTodo";
import DisplayTodos from "../components/DisplayTodos";
import { TodoProvider } from "../context/TodoContext";
import Logo from "../components/Logo";

export default function Todo() {

  return (
    <TodoProvider>
      <div className="flex justify-center text-white my-2">
        <Logo page={'To-do'}/>
      </div>

      <WriteTodo />
      <DisplayTodos />
    </TodoProvider>
  );
}
