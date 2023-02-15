import moment from "moment";
import React from "react";
import LayoutApp from "../components/LayoutApp";
import { format } from "date-fns";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const AppPage = () => {
  const today = new Date();
  const formattedDate = format(today, "PPPP");
  return (
    <LayoutApp>
      <div>
        Today <span>{formattedDate}</span>
      </div>
    </LayoutApp>
  );
};

export default AppPage;
