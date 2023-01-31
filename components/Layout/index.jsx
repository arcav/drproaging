import React from "react";
import { Navbar } from "../NavBar/Navbar";
import {Footer} from "../Footer/Footer"


export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  flex flex-col justify-between">
        {children}
      </main>
      <Footer />
    </>
  );
};
