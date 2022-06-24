import React, { useContext, useRef, useState } from "react";
import TodoType from "../../Models/todo";
import { useDispatch } from "react-redux";
import { TodoContext } from "../../store/todo-context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { timeLog } from "console";

// import { dataActions } from "../../store/data-slice";

const options: { name: string; id: string }[] = [
  { name: "High", id: "p1" },
  { name: "Low", id: "p2" },
  { name: "Intermediate", id: "p3" },
];
const TodoForm: React.FC = () => {
  const [selectValue, setSelectValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todoCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLTextAreaElement>(null);
  const todoTitleInputRef = useRef<HTMLInputElement>(null);
  const todoTimeInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let noww = moment();
    console.log(noww);
    console.log(selectedDate);
    const now = new Date();
    let secondsLeft = moment(selectedDate).diff(moment(), "seconds");
    console.log(secondsLeft);
    console.log(now);
    console.log(moment(selectedDate).calendar());
    const enteredTitle = todoTitleInputRef.current!.value;
    const enteredText = todoTextInputRef.current!.value;
    const enteredPriority = selectValue;
    const enteredTime = selectedDate.toString();
    const time = moment(now).calendar();
    const isDone = false;
    const alarm = false;

    if (
      enteredText?.trim().length === 0 &&
      enteredTitle?.trim().length === 0 &&
      enteredTime?.trim().length === 0 &&
      enteredPriority?.trim().length === 0
    ) {
      return;
    }
    todoCtx.addTodo(
      enteredText,
      enteredTitle,
      enteredTime,
      enteredPriority,
      time,
      secondsLeft,
      isDone,
      alarm
    );
    todoCtx.showTask();
  };
  const selectOptionHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
    console.log(selectedDate);
  };

  return (
    <form
      className="w-4/5 bg-darkGrey m-auto mt-10 gap-4 rounded shadow-sm shadow-meduimGrey flex flex-col justify-between items-center p-4 md:w-3/4 xl:w-3/5  "
      onSubmit={submitHandler}
    >
      <div className="w-3/4 flex flex-col md:w-1/2">
        <label htmlFor="title" className="text-white text-1xl text-center mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className=" text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2"
          ref={todoTitleInputRef}
        />
      </div>
      <div className="w-3/4 flex flex-col md:w-1/2">
        <label htmlFor="text" className="text-white text-1xl text-center mb-2">
          Description
        </label>
        <textarea
          id="text"
          className="text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2"
          ref={todoTextInputRef}
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:w-1/2">
        <label htmlFor="time" className="text-white text-1xl text-center mb-2">
          Time
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
          className="w-full text-center text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:w-1/2">
        <label
          htmlFor="priority"
          className="text-white text-1xl text-center mb-2"
        >
          Priority
        </label>
        <select
          name="priority"
          placeholder="Priority"
          id="priority"
          onChange={e => selectOptionHandler(e)}
          value={selectValue}
          className="w-full text-center text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2"
        >
          {options.map(option => (
            <option value={option.name} id={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-1/4 text-accent bg-accentLight border border-accentLight p-3 rounded-full hover:bg-accent hover:text-white"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
