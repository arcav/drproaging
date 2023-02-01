import React from "react";


export const SideBar = ({ openHandler, open }) => {
  return (
    <div
    className={`w-3/4 h-screen bg-[#010f24] bg-opacity-80 z-20 top-0 right-0 fixed transition-all duration-700  ${
      open ? "left-0" : "-left-full"
    }`}
  >
      <div onClick={openHandler}>x</div>
    </div>
  );
};
