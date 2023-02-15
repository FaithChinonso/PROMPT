import React, { useContext, useEffect, useState } from "react";
import LayoutApp from "../components/LayoutApp";

import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { format } from "date-fns";
import { UiContext } from "../store/ui-context";
import { formModal } from "../utils/arrayItems";

const AppPage = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [form, setForm] = useState<string>("");
  const uiCtx = useContext(UiContext);
  const today = new Date();
  const formattedDate = format(today, "PPPP");
  const changeMode = () => {
    if (uiCtx.evening) {
      uiCtx.setEvening("19");
    } else {
      uiCtx.setEvening("8");
    }
  };
  const showModalHandler = () => {
    setModal(prev => !prev);
  };
  const showFormHandler = (type: string) => {
    setForm(type);
    setModal(false);
  };
  return (
    <LayoutApp>
      <div className="px-8 md:px-14 lg:px-12  py-6 lg:py-12 ">
        <div className="flex justify-between relative">
          <div className=" text-lg">
            <span className="mr-1" onClick={changeMode}>
              {uiCtx.evening ? <ModeNightIcon /> : <LightModeIcon />}
            </span>
            Today{" "}
            <span className="text-sm text-darkPrimary ml-1">
              {formattedDate}
            </span>
          </div>
          <div className="" onClick={showModalHandler}>
            <span className="mr-1">
              <AddTaskIcon />
            </span>
            Add New
          </div>
          {modal ? (
            <div className="absolute top-10 right-0">
              {formModal.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    showFormHandler(item.type);
                  }}
                  className={`bg-lightGrey  rounded-md w-120px p-4 shadow-sm shadow-lightGrey  hover:bg-softSecondaryLight  ${
                    uiCtx.evening ? "text-offWhite " : "text-meduimGrey"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </LayoutApp>
  );
};

export default AppPage;
