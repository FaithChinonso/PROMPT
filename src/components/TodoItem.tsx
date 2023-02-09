import React from "react";
import moment from "moment";
const TodoItem: React.FC<{
  text: string;
  title: string;
  time: string;
  priority: string;
  currentTime: string;
  secondsLeft: number;
  isDone: boolean;
  alarm: boolean;
  onRemoveTodo: () => void;
  onDoneTask: () => void;
}> = props => {
  console.log(props, props.isDone);
  return (
    <div
      className={`${
        props.alarm
          ? "bg-accentLight w-4/5 h-120 m-auto mt-10 gap-4 rounded shadow-sm shadow-meduimGrey flex flex-col justify-between items-center p-4 md:w-2/5"
          : "bg-darkGrey w-4/5 h-120 m-auto mt-10 gap-4 rounded shadow-sm shadow-meduimGrey flex flex-col justify-between items-center p-4 md:w-2/5"
      }`}
    >
      <div className="text-white">{`Time left - ${moment(props.time)
        .startOf("seconds")
        .fromNow()}`}</div>

      <div className=" text-white text-5xl bolder focus:outline-none p-2 text-center">
        {props.title}
      </div>
      <div className=" text-white text-1xl rounded focus:outline-none p-2 text-center">
        {props.text}
      </div>
      <div className="flex">
        <div className="w-3/4 flex flex-col  rounded">
          <div className="text-white text-1xl text-center mb-2">
            Time Created
          </div>
          <div className=" text-white text-1xl rounded focus:outline-none p-2 text-center">
            {props.currentTime}
          </div>
        </div>
        <div className="w-3/4 flex flex-col  rounded">
          <div className="text-white text-1xl text-center mb-2">Time Due</div>
          <div className=" text-white text-1xl  rounded focus:outline-none p-2 text-center">
            {moment(props.time).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around w-full items-center gap-5">
        <div className="w-3/4 flex flex-col rounded">
          <div className="text-white text-1xl text-center mb-2">
            Priority- {props.priority}
          </div>
        </div>
        {props.isDone ? (
          <div className="text-white text-1xl text-center mb-2">Completed</div>
        ) : (
          <div className="text-white text-1xl text-center mb-2">Pending</div>
        )}
      </div>
      <div className="flex justify-around w-full">
        <button
          className="bg-softPrimary border border-darkPrimary text-white px-3.5 py-2 rounded-full shadow-sm shadow-meduimGrey hover:bg-darkPrimary"
          onClick={props.onDoneTask}
        >
          Complete
        </button>
        <button className=" border border-lightGrey text-white px-3.5 py-2 rounded-full shadow-sm shadow-meduimGrey hover:bg-white hover:text-darkGrey">
          Edit
        </button>
        <button
          className="bg-accentLight border border-accent text-white px-3.5 py-2 rounded-full shadow-sm shadow-meduimGrey hover:bg-accent"
          onClick={props.onRemoveTodo}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
