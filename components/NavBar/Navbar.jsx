import React from "react";
import {Logo}  from "../Logo";

export const Navbar = () => {
  return (
    <nav className="flex justify-between w-full h-20 bg-black text-white">
      <div className="flex items-center bg-red-500 w-1/4 justify-center h-full">
        <Logo className="text-white"/>
      </div>
      <ul className="flex h-full bg-green-500 px-2 items-center w-1/2">
        <li className="flex gap-3 cursor">
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
          <p>Link4</p>
        </li>
      </ul>
    </nav>
  );
};
