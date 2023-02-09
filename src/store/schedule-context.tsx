import React, { useState, useEffect } from "react";
import moment from "moment";
import ScheduleType from "../Models/schedule";

type ScheduleContextObj = {
  items: ScheduleType[];
  schedule: boolean;
  form: boolean;

  addSchedule: (description: string, title: string, priority: string) => void;
  removeSchedule: (id: string) => void;
  showScheduleForm: () => void;
  showSchedule: () => void;
};
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
export const ScheduleContext = React.createContext<ScheduleContextObj>({
  items: [],
  schedule: false,
  form: false,

  addSchedule: () => {},
  removeSchedule: (id: string) => {},
  showScheduleForm: () => {},
  showSchedule: () => {},
});

const ScheduleContextProvider: React.FC<Props> = props => {
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  const [formShow, setFormShow] = useState(false);
  const [scheduleShow, setScheduleShow] = useState(false);

  const addScheduleHandler = (
    scheduleDescription: string,
    scheduleTitle: string,
    schedulePriority: string
  ) => {
    const newSchedule = new ScheduleType(
      scheduleDescription,
      scheduleTitle,
      schedulePriority
    );

    setSchedules(prevSchedules => {
      return prevSchedules.concat(newSchedule);
    });

    setFormShow(false);
  };

  const removeScheduleHandler = (scheduleId: string) => {
    setSchedules(prevSchedules => {
      return prevSchedules.filter(schedule => schedule.id !== scheduleId);
    });
  };

  const showFormHandler = () => {
    setFormShow(prev => !prev);
    setScheduleShow(false);
  };
  const showScheduleHandler = () => {
    setScheduleShow(prev => !prev);
    setFormShow(false);
  };

  const contextValue: ScheduleContextObj = {
    items: schedules,
    schedule: scheduleShow,
    form: formShow,
    addSchedule: addScheduleHandler,
    removeSchedule: removeScheduleHandler,
    showScheduleForm: showFormHandler,
    showSchedule: showScheduleHandler,
  };

  return (
    <ScheduleContext.Provider value={contextValue}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContextProvider;
