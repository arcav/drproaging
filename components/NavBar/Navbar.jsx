import React, { useState } from "react";
import { Logo } from "../Logo";
import { SideBar } from "../SideBar/SideBar";
import Link from "next/link";
import Button from "../Button";

const path = [
  { href: "/", name: "home" },
  { href: "/nosotros", name: "nosotros" },
  { href: "/historias", name: "historias" },
  { href: "/servicios", name: "servicios" },
  { href: "/blog", name: "blog" },
  { href: "/contacto", name: "contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  let navLinkd = path.map((x) => (
    <>
      <Link href={x.href}>{x.name.toUpperCase()}</Link>
    </>
  ));

  let sideBarLink = path.map((s) => (
    <>
      <Button href={s.href}>{s.name.toUpperCase()}</Button>
    </>
  ));

  console.log(sideBarLink);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between w-full h-20 bg-black text-white">
        <div
          className="flex items-center w-1/4 justify-center h-full"
          onClick={openHandler}
        >
          <Logo />
        </div>
        <ul className="flex h-full   px-2 items-center w-1/2">
          <li className="flex w-full gap-3 justify-evenly mx-auto">
            {navLinkd}
          </li>
        </ul>
        <SideBar
          openHandler={openHandler}
          open={open}
          sideBarLink={sideBarLink}
        />
      </nav>
    </>
  );
};
