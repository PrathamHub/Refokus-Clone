import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title }) => {
  return (
    <div className="max-w-40 px-4 py-2 rounded bg-zinc-100 text-black mr-5 flex items-center justify-between">
      <span className="text-sm font-medium">{title || "Get Started"}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
