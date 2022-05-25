import React, { useState, useContext } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { TodoContext } from "../../store/todo-context";
import TodoType from "../../Models/todo";
import Todo from "../Todos/Todos";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/task.json";
import TodoForm from "../TodoForm/TodoForm";

const HomePage: React.FC = () => {
  const todoCxt = useContext(TodoContext);
  const [data, setData] = useState<TodoType[]>([]);
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
    <div>
      <div>
        <div>
          JUST<span>do</span>IT
        </div>
        <div>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by title"
            inputProps={{ "aria-label": "search" }}
            // onChange={onChange}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
        <div onClick={todoCxt.showTask}>All Task</div>
      </div>
      {todoCxt.task ? (
        <Todo />
      ) : (
        <div>
          <Lottie animationData={animationData} autoPlay />
          <h1>Organize your tasks and projects</h1>
        </div>
      )}
      {todoCxt.form ? <TodoForm /> : ""}
      <div onClick={todoCxt.showForm}>&plus;</div>
    </div>
  );
};
export default HomePage;
