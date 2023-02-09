import React, { useContext, useState, useRef } from "react";
import { ScheduleContext } from "../store/schedule-context";

const ScheduleForm = () => {
  const [selectValue, setSelectValue] = useState("");
  const options: { name: string; id: string }[] = [
    { name: "High", id: "p1" },
    { name: "Low", id: "p2" },
    { name: "Intermediate", id: "p3" },
  ];

  const scheduleCtx = useContext(ScheduleContext);
  const scheduleDescriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const scheduleTitleInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTitle = scheduleTitleInputRef.current!.value;
    const enteredDescription = scheduleDescriptionInputRef.current!.value;
    const enteredPriority = selectValue;

    if (
      enteredDescription?.trim().length === 0 &&
      enteredTitle?.trim().length === 0 &&
      enteredPriority?.trim().length === 0
    ) {
      return;
    }
    scheduleCtx.addSchedule(enteredDescription, enteredTitle, enteredPriority);
    scheduleCtx.showSchedule();
  };
  const selectOptionHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
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
          ref={scheduleTitleInputRef}
        />
      </div>
      <div className="w-3/4 flex flex-col md:w-1/2">
        <label htmlFor="text" className="text-white text-1xl text-center mb-2">
          Description
        </label>
        <textarea
          id="text"
          className="text-darkGrey text-1xl border border-lightGrey rounded focus:outline-none p-2"
          ref={scheduleDescriptionInputRef}
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
        Add Schedule
      </button>
    </form>
  );
};

export default ScheduleForm;
