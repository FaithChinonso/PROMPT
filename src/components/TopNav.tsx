import React, { useState, useContext } from "react";
import { UiContext } from "../store/ui-context";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";
import { navItems } from "../utils/arrayItems";
import { navType } from "../types/arrayTypes";
import { Outlet, Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

type Props = {
  type: string;
};
const TopNav: React.FC = () => {
  const uiCxt = useContext(UiContext);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between mx-auto w-full max-h-10 overflow-visible bg-softPrimaryLight px-8 md:px-14 lg:px-24 xl:px-32 py-11 z-10 shadow-2xl shadow-lightGrey ">
      <div className="  px-2 py-2 text-darkPrimary font-extralight text-4xl italic font-['blaka'] flex-1">
        PROMPT
      </div>

      <div className="hidden md:flex justify-between space-x-4 text-darkPrimary ">
        <div className="">
          {showSearch ? (
            <input
              type="text"
              className="border-2 border-lightGrey p-2 rounded-md focus:outline-none text-sm transition delay-75 duration-150 ease-in-out w-[250px]"
              placeholder="Search... "
            />
          ) : (
            ""
          )}
          <SearchIcon onClick={() => setShowSearch(prev => !prev)} />
        </div>
        <div className="hover:text-white">
          <NotificationsNoneIcon />
        </div>
        <Link to={"/profile"}>
          <PersonOutlineOutlinedIcon />
        </Link>
      </div>
      {/* <button className="block md:hidden focus:outline-none">
            {uiCxt.menu ? (
              <HighlightOffIcon
                className="text-1xl text-accent"
                onClick={uiCxt.showMenu}
              />
            ) : (
              <MenuIcon
                className="text-1xl text-accent"
                onClick={uiCxt.showMenu}
              />
            )}
          </button>
          {uiCxt.menu ? (
            <div className="bg-white items-center justify-start space-y-5  w-full h-25  absolute right-0 top-11 flex flex-col m-auto my-auto gap-4 rounded shadow-sm shadow-meduimGrey p-2  ">
              <div
                className="text-darkGrey hover:text-accent"
                onClick={uiCxt.showTask}
              >
                Tasks
              </div>
              <div className="text-darkGrey hover:text-accent">Projects</div>
              <div className="text-darkGrey hover:text-accent">Schedule</div>
            </div>
          ) : (
            ""
          )} */}
    </nav>
  );
};

export default TopNav;
