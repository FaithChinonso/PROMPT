import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../store/todo-context";
import { UiContext } from "../store/ui-context";
import TodoType from "../Models/todo";
import { Add } from "@mui/icons-material";
import { logout } from "../firebaseConfiq";

import TodoForm from "../components/TodoForm";
import ScheduleForm from "../components/ScheduleForm";
import Calendar from "react-calendar";

import Layout from "../components/Layout";
import { redirect } from "react-router-dom";
import { AuthContext } from "../store/auth-context";

const HomePage: React.FC = () => {
  const todoCxt = useContext(TodoContext);
  const uiCxt = useContext(UiContext);
  const authCxt = useContext(AuthContext);
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
    <Layout type="all">
      <div className=" max-h-screen overflow-scroll  h-screen relative bg-red-200">
        <div className="mt-40" onClick={() => logout()}>
          Logout
        </div>
        <div
          className={`bg-darkPrimary -bottom-16 -right-16 flex  z-0  ${
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
        </div>
        {uiCxt.form === "Task" ? <TodoForm /> : ""}
        {uiCxt.form === "Schedule" ? <Calendar /> : ""}
      </div>
    </Layout>
  );
};
export default HomePage;
