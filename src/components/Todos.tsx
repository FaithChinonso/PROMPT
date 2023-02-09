import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

const Todo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className="w-full flex flex-col md:flex-wrap md:flex-row">
      {todoCtx.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          time={item.time}
          title={item.title}
          priority={item.priority}
          currentTime={item.currentTime}
          secondsLeft={item.secondsLeft}
          isDone={item.isDone}
          alarm={item.alarm}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
          onDoneTask={todoCtx.doneTask.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todo;
