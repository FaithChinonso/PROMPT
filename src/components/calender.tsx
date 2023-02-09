import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-white text-xl">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default calender;
