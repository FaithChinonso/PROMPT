import React, { useState, useEffect } from "react";
import moment from "moment";
import TodoType from "../Models/todo";

type TodosContextObj = {
  items: TodoType[];
  task: boolean;
  form: boolean;
  menu: boolean;

  addTodo: (
    text: string,
    title: string,
    time: string,
    priority: string,
    currentTime: string,
    secondsLeft: number
  ) => void;
  removeTodo: (id: string) => void;
  showForm: () => void;
  showTask: () => void;
  showMenu: () => void;
};
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  task: false,
  form: false,
  menu: false,
  addTodo: () => {},
  removeTodo: (id: string) => {},
  showForm: () => {},
  showTask: () => {},
  showMenu: () => {},
});

const TodoContextProvider: React.FC<Props> = props => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [formShow, setFormShow] = useState(false);
  const [taskShow, setTaskShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newBookings = todos.map(todo => {
        // console.log(todo.time);
        // console.log(moment());
        const time = moment(todo.time).format("H:mm");
        // console.log(time);
        return {
          ...todo,
          secondsLeft: moment(todo.time).diff(moment(), "seconds"),
        };
      });
      console.log(newBookings);
      setTodos(newBookings);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [todos]);

  const addTodoHandler = (
    todoText: string,
    todoTitle: string,
    todoTime: string,
    todoPriority: string,
    currentTime: string,
    secondsLeft: number
  ) => {
    const newTodo = new TodoType(
      todoText,
      todoTitle,
      todoTime,
      todoPriority,
      currentTime,
      secondsLeft
    );

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
    setFormShow(prev => !prev);
    setTaskShow(false);
    setMenuShow(false);
  };
  const showTaskHandler = () => {
    setTaskShow(prev => !prev);
    setFormShow(false);
    setMenuShow(false);
  };
  const showMenuHandler = () => {
    setMenuShow(prev => !prev);
  };

  const contextValue: TodosContextObj = {
    items: todos,
    task: taskShow,
    form: formShow,
    menu: menuShow,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    showForm: showFormHandler,
    showTask: showTaskHandler,
    showMenu: showMenuHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
