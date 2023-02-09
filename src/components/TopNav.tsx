import React, { useState, useContext } from "react";
import { UiContext } from "../store/ui-context";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  type: string;
};
const TopNav: React.FC<Props> = ({ type }) => {
  const uiCxt = useContext(UiContext);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="  flex items-center justify-between mx-auto w-full max-h-10 overflow-visible bg-softPrimary px-8 md:px-14 lg:px-24 xl:px-32 py-11 z-10 shadow-2xl shadow-meduimGrey ">
      <div className=" w-48 text-center px-2 py-2 text-darkPrimary font-extralight text-4xl italic font-['blaka'] ">
        PROMPT
      </div>
      {type === "all" ? (
        <>
          <div className="hidden md:flex justify-between w-3/5">
            <div
              onClick={uiCxt.showTask}
              className=" items-center justify-around  w-64 flex"
            >
              <div
                className="text-darkGrey hover:text-accent"
                onClick={uiCxt.showTask}
              >
                Tasks
              </div>
              <div className="text-darkGrey hover:text-accent">Projects</div>
              <div className="text-darkGrey hover:text-accent">Schedule</div>
            </div>
            <div className="">
              {showSearch ? (
                <input
                  type="text"
                  className="border-2 border-lightGrey p-2 rounded-md focus:outline-none text-sm transition delay-75 duration-150 ease-in-out"
                  placeholder="Search... "
                />
              ) : (
                ""
              )}
              <SearchIcon onClick={() => setShowSearch(prev => !prev)} />
            </div>
          </div>
          <button className="block md:hidden focus:outline-none">
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
          )}
        </>
      ) : (
        ""
      )}
    </nav>
  );
};

export default TopNav;
