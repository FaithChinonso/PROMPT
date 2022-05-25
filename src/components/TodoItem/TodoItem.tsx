import React from "react";

const TodoItem: React.FC<{
  text: string;
  title: string;
  time: string;
  priority: string;
  onRemoveTodo: () => void;
}> = props => {
  return (
    <div onClick={props.onRemoveTodo}>
      <div>{props.title}</div>
      <div>{props.text}</div>
      <div>{props.time}</div>
      <div>{props.priority}</div>
    </div>
  );
};
export default TodoItem;
