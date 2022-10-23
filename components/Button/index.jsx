import React from "react";
import Link from "next/link";

const Button = ({ children }) => {
  return (
    <>
      <Link href={children}>
        <button className="btn bg-black m-2 shadow-md w-11/12 shadow-black text text-white border-double border-[2px] border-white  hover:bg-white hover:text-black  hover:shadow-lg hover:shadow-black hover:transition hover:ease-linear  delay-150  hover:-translate-y-1 hover:scale-105   duration-500 cursor-pointer ">
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
