import React, { useContext, useRef, useState } from "react";
import TodoType from "../../Models/todo";
import { useDispatch } from "react-redux";
import { TodoContext } from "../../store/todo-context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoTitleInputRef = useRef<HTMLInputElement>(null);
  const todoTimeInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTitle = todoTitleInputRef.current!.value;
    const enteredText = todoTextInputRef.current!.value;
    const enteredPriority = selectValue;
    const enteredTime = moment(selectedDate).startOf("hour").fromNow();

    if (
      enteredText?.trim().length === 0 &&
      enteredTitle?.trim().length === 0 &&
      enteredTime?.trim().length === 0 &&
      enteredPriority?.trim().length === 0
    ) {
      return;
    }
    todoCtx.addTodo(enteredText, enteredTitle, enteredTime, enteredPriority);
  };
  const selectOptionHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
    console.log(selectedDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={todoTitleInputRef} />
      </div>
      <div>
        <label htmlFor="text">Description</label>
        <input type="text" id="text" ref={todoTextInputRef} />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          placeholder="Priority"
          id="priority"
          onChange={e => selectOptionHandler(e)}
          value={selectValue}
        >
          {options.map(option => (
            <option value={option.name} id={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
