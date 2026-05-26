"use client";
import React from "react";

const Button = ({ text, className, comp }: any) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full   cursor-pointer ${className}`}
    >
      <span>{text}</span>
      {comp ? comp : ""}
    </div>
  );
};

export default Button;
