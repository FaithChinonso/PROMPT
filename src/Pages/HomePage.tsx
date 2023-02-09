import React, { useState, useContext } from "react";
import { TodoContext } from "../store/todo-context";
import { UiContext } from "../store/ui-context";
import TodoType from "../Models/todo";
import { Add } from "@mui/icons-material";

import TodoForm from "../components/TodoForm";
import ScheduleForm from "../components/ScheduleForm";
import Calendar from "react-calendar";

const HomePage: React.FC = () => {
  const todoCxt = useContext(TodoContext);
  const uiCxt = useContext(UiContext);
  const [data, setData] = useState<TodoType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showForms, setShowForms] = useState(false);
  //   const onChange = async (e: React.ChangeEvent) => {
  //     const searchData = todoCxt.items.filter(item => {
  //       if (
  //         item.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
  //       ) {
  //         return item;
  //       }
  //     });

  //     setData(searchData);
  //   };

  const showFormsHandler = () => {
    setShowForms(true);
  };
  const showTaskFormHandler = (str: string) => {
    uiCxt.showForm(str);

    setShowForms(false);
  };

  return (
    <div className=" max-h-screen overflow-scroll  h-screen relative bg-white">
      <body className="">
        <div
          className={`bg-darkPrimary  -bottom-16 -right-16   flex  z-0  ${
            showForms
              ? "w-full h-full relative rounded"
              : "w-36 h-36 fixed rounded-full items-center justify-center"
          }`}
          onClick={() => showFormsHandler()}
        >
          {showForms ? (
            <ul className=" bg-accentLight p-2 text-1xl text-accent list-none">
              <li onClick={() => showTaskFormHandler("Task")}>Task Form</li>
              <li onClick={() => showTaskFormHandler("Schedule")}>
                Schedule Form
              </li>
            </ul>
          ) : (
            <Add className="text-3xl text-softPrimary " />
          )}
          {uiCxt.form === "Task" ? <TodoForm /> : ""}
          {uiCxt.form === "Schedule" ? <Calendar /> : ""}
        </div>
      </body>
    </div>
  );
};
export default HomePage;
