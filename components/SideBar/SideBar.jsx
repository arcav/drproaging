import React from "react";
import Button from "../Button/index"

export const SideBar = ({ openHandler, open, routes }) => {
  return (
    <div
      className={`w-full h-screen bg-stone-50 bg-opacity-80 z-20 top-0 right-0 fixed transition-all duration-700  ${
        open ? "top-0" : "-top-full"
      }`}
    >
      <div
        className="text-2xl font-bold m-2 p-2 flex justify-end text-black"
        onClick={openHandler}
      >
        x
      </div>
      <div className="flex flex-col text-black">
        
        {routes}
      </div>
    </div>
  );
};
