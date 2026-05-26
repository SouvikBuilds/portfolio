"use client";
import Link from "next/link";
import React, { useState } from "react";
import OrangeButton from "./ui/Button";
import { Menu, MoveRightIcon, X } from "lucide-react";
import Button from "./ui/Button";
import MenuComponent from "@/components/ui/MenuComponent";

const links = [
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Work",
    path: "#work",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Reviews",
    path: "#testimonials",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpened] = useState(false);
  const handleOpen = () => {
    setOpened(true);
  };
  const handleClose = () => {
    setOpened(false);
  };
  return (
    <div className="relative z-10 flex flex-col">
      <div className="max-w-6xl w-full mx-auto px-6 h-16 flex items-center justify-between">
        <div className="logo">
          <Link
            href={"#hero"}
            className="font-display font-bold text-xl tracking-tight relative z-10"
          >
            <span className="text-zinc-900 dark:text-white font-bold">
              Souvik
            </span>
            <span className="text-orange-500 font-bold">Builds</span>
          </Link>
        </div>

        <div className="links">
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link, index) => (
              <li
                key={index}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {open ? (
            <div className="cursor-pointer md:hidden " onClick={handleClose}>
              <X size={30} className="text-white" />
            </div>
          ) : (
            <div className="cursor-pointer md:hidden " onClick={handleOpen}>
              <Menu size={30} className="text-white" />
            </div>
          )}
          <div>
            <Link href="#contact">
              <Button
                text="Hire me"
                className="bg-[#FF6B2B] hidden md:flex px-6 py-2 gap-2"
                comp={<MoveRightIcon className="text-white" size={20} />}
              />
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <div className="max-w-6xl w-full mx-auto">
          <MenuComponent className="px-6 py-4" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
