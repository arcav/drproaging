import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="btn bg-black w-11/12  m-2 shadow-md shadow-black text text-white border-double border-[2px] border-white  hover:bg-white hover:text-black  hover:shadow-lg hover:shadow-black hover:transition hover:ease-linear  delay-150  hover:-translate-y-1 hover:scale-105   duration-500 cursor-pointer ">
        {children}
      </button>
    </>
  );
};

export default Button;
