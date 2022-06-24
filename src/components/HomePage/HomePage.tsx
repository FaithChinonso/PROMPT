import React, { useState, useContext } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { TodoContext } from "../../store/todo-context";
import TodoType from "../../Models/todo";
import Todo from "../Todos/Todos";
import Lottie from "lottie-react";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import animationData from "../../assets/lottie/task.json";
import TodoForm from "../TodoForm/TodoForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlusCircle,
//   faBars,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

const HomePage: React.FC = () => {
  const todoCxt = useContext(TodoContext);
  const [data, setData] = useState<TodoType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
  const showFormHandler = () => {};
  return (
    <div className="py-2 px-8 md:px-14 lg:px-24 xl:px-32 max-h-screen overflow-scroll  h-screen relative bg-lightGrey">
      <nav className="  flex items-center justify-between mx-auto w-full max-h-10 overflow-visible">
        <div className=" w-48 text-center px-2 py-2 text-darkPrimary font-extralight text-4xl italic font-['blaka'] ">
          PROMPT
        </div>
        <div className="hidden md:flex justify-between w-3/5">
          <div
            onClick={todoCxt.showTask}
            className=" items-center justify-around  w-64 flex"
          >
            <div
              className="text-darkGrey hover:text-accent"
              onClick={todoCxt.showTask}
            >
              Tasks
            </div>
            <div className="text-darkGrey hover:text-accent">Projects</div>
            <div className="text-darkGrey hover:text-accent">Schedule</div>
          </div>
          <div className="">
            {showSearch ? (
              <input
                type="text"
                className="border-2 border-lightGrey p-2 rounded-md focus:outline-none text-sm transition delay-75 duration-150 ease-in-out"
                placeholder="Search... "
              />
            ) : (
              ""
            )}
            <SearchIcon onClick={() => setShowSearch(prev => !prev)} />
          </div>
        </div>

        <button className="block md:hidden focus:outline-none">
          {todoCxt.menu ? (
            <HighlightOffIcon
              className="text-1xl text-accent"
              onClick={todoCxt.showMenu}
            />
          ) : (
            <MenuIcon
              className="text-1xl text-accent"
              onClick={todoCxt.showMenu}
            />
          )}
        </button>
        {todoCxt.menu ? (
          <div className="bg-white items-center justify-start space-y-5  w-full h-25  absolute right-0 top-11 flex flex-col m-auto my-auto gap-4 rounded shadow-sm shadow-meduimGrey p-2  ">
            <div
              className="text-darkGrey hover:text-accent"
              onClick={todoCxt.showTask}
            >
              Tasks
            </div>
            <div className="text-darkGrey hover:text-accent">Projects</div>
            <div className="text-darkGrey hover:text-accent">Schedule</div>
          </div>
        ) : (
          ""
        )}
      </nav>
      {todoCxt.task ? (
        <Todo />
      ) : (
        <div>
          <h1>Organize your tasks and projects</h1>
        </div>
      )}
      {todoCxt.form ? <TodoForm /> : ""}

      <AddCircleIcon
        className="text-5xl text-accent fixed bottom-4 right-4"
        onClick={todoCxt.showForm}
      />
    </div>
  );
};
export default HomePage;
