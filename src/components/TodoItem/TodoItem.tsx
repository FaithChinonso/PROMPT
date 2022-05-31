import React from "react";
import moment from "moment";
const TodoItem: React.FC<{
  text: string;
  title: string;
  time: string;
  priority: string;
  currentTime: string;
  secondsLeft: number;
  onRemoveTodo: () => void;
}> = props => {
  return (
    <div
      onClick={props.onRemoveTodo}
      className="bg-accentLight w-4/5 h-120 m-auto mt-10 gap-4 rounded shadow-sm shadow-meduimGrey flex flex-col justify-between items-center p-4 md:w-2/5"
    >
      <div>{`Time left - ${moment(props.time)
        .startOf("seconds")
        .fromNow()}`}</div>
      <div className="w-3/4 flex flex-col border rounded">
        <div className="text-darkGrey text-1xl text-center mb-2">Title</div>
        <div className=" text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2 text-center">
          {props.title}
        </div>
      </div>
      <div className="w-3/4 flex flex-col border  rounded">
        <div className="text-darkGrey text-1xl text-center mb-2">
          Description
        </div>
        <div className=" text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2 text-center">
          {props.text}
        </div>
      </div>
      <div className="w-3/4 flex flex-col border rounded">
        <div className="text-darkGrey text-1xl text-center mb-2">
          Time Created
        </div>
        <div className=" text-darkGrey text-1xl border rounded focus:outline-none p-2 text-center">
          {props.currentTime}
        </div>
      </div>
      <div className="w-3/4 flex flex-col border  rounded">
        <div className="text-darkGrey text-1xl text-center mb-2">Time Due</div>
        <div className=" text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2 text-center">
          {moment(props.time).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
      <div className="w-3/4 flex flex-col border  rounded">
        <div className="text-darkGrey text-1xl text-center mb-2">Priority</div>
        <div className=" text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2 text-center">
          {props.priority}
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
