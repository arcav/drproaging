import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center  bg-white h-[95vh] w-[95vw] rounded-lg shadow-lg shadow-slate-500">
      {children}
    </div>
  );
};

export default Container;
