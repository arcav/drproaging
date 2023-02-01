import React, { useState } from "react";
import { Logo } from "../Logo";
import { SideBar } from "../SideBar/SideBar";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between w-full h-20 bg-black text-white">
        <div
          className="flex items-center bg-red-500 w-1/4 justify-center h-full"
          onClick={openHandler}
        >
          <Logo />
        </div>
        <ul className="flex h-full  bg-green-500 px-2 items-center w-1/2">
          <li className="flex w-full gap-3 cursor-pointer justify-evenly bg-blue-500 mx-auto">
            <p>Link1</p>
            <p>Link2</p>
            <p>Link3</p>
            <p>Link4</p>
          </li>
        </ul>

        <SideBar openHandler={openHandler} open={open} />
      </nav>
    </>
  );
};
