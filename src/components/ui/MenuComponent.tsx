"use client";

import React from "react";
import Button from "./Button";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
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

const MenuComponent = ({ className }: any) => {
  return (
    <div
      className={`flex flex-col items-start gap-2 max-w-6xl ${className} space-y-3`}
    >
      {links.map((link, index) => (
        <ul key={index} className="p-1 rounded-lg">
          <li className="text-white active:text-orange-500 w-full rounded-lg focus:ring-orange-400 cursor-pointer">
            <Link href={link.path}>{link.title}</Link>
          </li>
        </ul>
      ))}
      <Link href="#contact">
        <Button
          text="Hire me"
          className="bg-[#FF6B2B] px-6 py-2 gap-2"
          comp={<MoveRightIcon className="text-white" size={20} />}
        />
      </Link>
    </div>
  );
};

export default MenuComponent;
