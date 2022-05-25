import React, { useState } from "react";

import TodoType from "../Models/todo";

type TodosContextObj = {
  items: TodoType[];
  task: boolean;
  form: boolean;
  addTodo: (
    text: string,
    title: string,
    time: string,
    priority: string
  ) => void;
  removeTodo: (id: string) => void;
  showForm: () => void;
  showTask: () => void;
};
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  task: false,
  form: false,
  addTodo: () => {},
  removeTodo: (id: string) => {},
  showForm: () => {},
  showTask: () => {},
});

const TodoContextProvider: React.FC<Props> = props => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [formShow, setFormShow] = useState(false);
  const [taskShow, setTaskShow] = useState(false);

  const addTodoHandler = (
    todoText: string,
    todoTitle: string,
    todoTime: string,
    todoPriority: string
  ) => {
    const newTodo = new TodoType(todoText, todoTitle, todoTime, todoPriority);

    setTodos(prevTodos => {
      return prevTodos.concat(newTodo);
    });

    setFormShow(false);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };
  const showFormHandler = () => {
    setFormShow(true);
  };
  const showTaskHandler = () => {
    setTaskShow(prev => !prev);
  };

  const contextValue: TodosContextObj = {
    items: todos,
    task: taskShow,
    form: formShow,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    showForm: showFormHandler,
    showTask: showTaskHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
