import React from "react";

export const Layout = ({ children }) => {
  return (
    <main className="grid place-content-center h-screen bg-gray-100 ">
      {children}
    </main>
  );
};
