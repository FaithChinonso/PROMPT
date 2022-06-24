import React, { useState, useEffect } from "react";
import moment from "moment";
import TodoType from "../Models/todo";
import { SettingsRemoteRounded } from "@mui/icons-material";

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
    secondsLeft: number,
    isDone: boolean,
    alarm: boolean
  ) => void;
  removeTodo: (id: string) => void;
  showForm: () => void;
  showTask: () => void;
  showMenu: () => void;
  doneTask: (id: string) => void;
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
  doneTask: () => {},
});

const TodoContextProvider: React.FC<Props> = props => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [formShow, setFormShow] = useState(false);
  const [taskShow, setTaskShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [alarm, setAlarm] = useState(false);

  // useEffect(() => {
  //   // const timer = setInterval(() => {
  //   const newBookings = todos.map(todo => {
  //     // console.log(todo.time);
  //     // console.log(moment());

  //     // const timer = setInterval(() => {

  //     //   return secondsLeft;
  //     //   // if (second <= 0) {
  //     //   //   clearInterval(timer);
  //     //   // }
  //     // }, 1000);
  //     let secondsLeft = moment(todo.time).diff(moment(), "seconds");

  //     // setTimeout(() => {
  //     //   clearInterval(timer);
  //     // }, secondsLeft);

  //     // clearTimeout(timer);
  //     console.log(todos, secondsLeft);

  //     return {
  //       ...todo,
  //       secondsLeft: secondsLeft,
  //     };
  //   });

  //   // setTodos(newBookings);
  //   // }, 1000);

  //   // return () => {
  //   //
  //   // };
  // }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      const newBookings = todos.map(todo => {
        // console.log(todo.time);
        // console.log(moment());
        const time = moment(todo.time).diff(moment(), "seconds");
        console.log(time);
        if (time < 0) {
          clearInterval(timer);
          todo.alarm = true;
        } else {
          todo.alarm = false;
        }

        return {
          ...todo,
          secondsLeft: time,
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
    secondsLeft: number,
    isDone: boolean,
    alarm: boolean
  ) => {
    const newTodo = new TodoType(
      todoText,
      todoTitle,
      todoTime,
      todoPriority,
      currentTime,
      secondsLeft,
      isDone,
      alarm
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
  const doneTaskHandler = (todoId: string) => {
    // const selectedTodo = todos.filter(todo => todo.id === todoId);
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    console.log(todos);
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
    doneTask: doneTaskHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
