import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" mx-auto  w-[95%] bg-white rounded-xl border border-slate-200 shadow-md shadow-slate-600">
      {children}
    </div>
  );
};

export default Container;
