import React, { useContext, useEffect, useState } from "react";
import LayoutApp from "../components/LayoutApp";

import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { format } from "date-fns";
import { UiContext } from "../store/ui-context";

const AppPage = () => {
  const uiCtx = useContext(UiContext);
  const today = new Date();
  const formattedDate = format(today, "PPPP");
  return (
    <LayoutApp>
      <div className="px-8 md:px-14 lg:px-12  py-6 lg:py-12 ">
        <div className="flex justify-between">
          <div className=" text-lg">
            <span>{uiCtx.evening ? <ModeNightIcon /> : <LightModeIcon />}</span>
            Today{" "}
            <span className="text-sm text-darkPrimary">{formattedDate}</span>
          </div>
          <div className="">
            <span>
              <AddTaskIcon />
            </span>
            Add New
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default AppPage;
