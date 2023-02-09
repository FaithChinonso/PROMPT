import React, { useState, useEffect } from "react";
import moment from "moment";
import TodoType from "../Models/todo";

type TodosContextObj = {
  items: TodoType[];
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
  doneTask: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  doneTask: () => {},
});
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const TodoContextProvider: React.FC<Props> = props => {
  const [todos, setTodos] = useState<TodoType[]>([]);

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

  const contextValue: TodosContextObj = {
    items: todos,

    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,

    doneTask: doneTaskHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
