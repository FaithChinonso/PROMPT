import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoType from "../../Models/todo";
import { TodoContext } from "../../store/todo-context";

const Todo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul>
      {todoCtx.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          time={item.time}
          title={item.title}
          priority={item.priority}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todo;
