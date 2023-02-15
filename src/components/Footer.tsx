import React from "react";
import { socialLinks } from "../utils/homeArray";

const Footer = () => {
  return (
    <div className="flex flex-col  px-8 md:px-14 lg:px-24 xl:px-32 py-11 h-[200px]">
      <div className="w-full flex justify-center items-center space-x-4">
        {socialLinks.map(item => (
          <div
            key={item.id}
            className="border border-lightGrey p-2 cursor-pointer"
          >
            <item.icon className="text-meduimGrey  text-5xl  hover:text-white hover:bg-lightGrey" />
          </div>
        ))}
      </div>
      <div className="w-full border-t border-lightGrey mt-6 justify-end items-end">
        <div className="  px-2 py-2 text-softPrimary font-extralight text-4xl italic font-['blaka'] text-right">
          PROMPT{" "}
          <span className="text-meduimGrey text-xs ml-2 font-['Poppins']">
            2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
