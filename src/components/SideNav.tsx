import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebaseConfiq";
import { navType } from "../types/arrayTypes";
import { navItems } from "../utils/arrayItems";

import LogoutIcon from "@mui/icons-material/Logout";
import { UiContext } from "../store/ui-context";

const SideNav = () => {
  const uiCtx = useContext(UiContext);
  return (
    <div
      className={`w-[200px] fixed left-0 top-[87px] h-screen  py-4 ${
        uiCtx.evening
          ? "text-softPrimary bg-darkPrimary"
          : "text-darkPrimary  bg-softPrimaryLight "
      }`}
    >
      {" "}
      <ul className=" items-center justify-center flex-1 flex flex-col space-y-6">
        {navItems.map((item: navType) => (
          <li
            key={item.id}
            className={`text-sm  w-full p-4 ${
              uiCtx.evening ? "hover:bg-darkGrey" : "hover:bg-white"
            }`}
          >
            <span>
              <item.icon />{" "}
            </span>
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div
        className="mt-64 text-darkPrimary text-sm hover:bg-white w-full p-4"
        onClick={() => logout()}
      >
        <span>
          <LogoutIcon />
        </span>
        Logout
      </div>
    </div>
  );
};

export default SideNav;
