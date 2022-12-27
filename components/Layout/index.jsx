import React from "react";

export const Layout = ({ children }) => {
  return (
    <main className="min-h-screen  flex flex-col justify-center gap-5" >
      {children}
    </main>
  );
};
