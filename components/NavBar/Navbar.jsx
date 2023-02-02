import React, { useState } from "react";
import { Logo } from "../Logo";
import { SideBar } from "../SideBar/SideBar";
import Link from "next/link";
import Button from "../Button";

export const Navbar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { href: "/", name: "home" },
    { href: "/Nosotros", name: "Nosotros" },
    { href: "/Historias", name: "Historias" },
    { href: "/Servicios", name: "Servicios" },
    { href: "/Blogg", name: "Blogg" },
    { href: "/Contacto", name: "Contacto" },
  ];

  let navLink = routes.map((path) => (
    <>
      <Link href={path.href}>{path.name}</Link>
    </>
  ));

  let sideBarLink = routes.map((path,i) => (
    <Button key={i} href={path.href}>{path.name}</Button>
  ));

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-evenly w-full h-20 bg-black text-white">
        <div
          className="flex pt-2 w-4/6 h-full md:m-auto "
          onClick={openHandler}
        >
          {open ? <Logo /> : null}
        </div>
        <ul className="hidden md:flex h-full   px-2 items-center w-1/2">
          <li className="hidden md:flex w-full gap-3 justify-evenly mx-auto">
            {navLink}
          </li>
        </ul>
        <SideBar openHandler={openHandler} open={open} routes={sideBarLink} />
      </nav>
    </>
  );
};
