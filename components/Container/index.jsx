import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" flex justify-center items-center m-auto my-5 h-screen w-[95%] bg-white rounded-xl border border-slate-200 shadow-md shadow-slate-600">
      <h1>{children}</h1>
    </div>
  );
};

export default Container;
