import React from "react";
import { SiAlpinelinux } from "react-icons/si";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1px] border-r-[1px] border-zinc-700 flex items-center justify-between">
      <img className="w-14 h-14 ml-9" src={val.url} alt="" />
      <span>{val.number || "08"}</span>
    </div>
  );
};

export default Stripe;
