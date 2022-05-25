import { useContext, useState } from "react";
import Todo from "./components/Todos/Todos";
import TodoType from "./Models/todo";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoContextProvider, { TodoContext } from "./store/todo-context";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const todoCtx = useContext(TodoContext);
  return (
    <TodoContextProvider>
      <HomePage />
    </TodoContextProvider>
  );
}

export default App;
