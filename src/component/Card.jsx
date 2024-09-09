import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, name }) => {
  return (
    <div
      className={`${width} bg-zinc-800 rounded-xl p-5 transition-colors duration-300 ${
        name === "second" ? "hover:bg-blue-600" : ""
      }`}
    >
      <div className={`w-full min-h-[30rem] flex flex-col justify-between`}>
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-9">Heading whatever</h1>
        <div
          className={`down w-full ${
            name !== "second" ? "invisible" : "visible"
          }`}
        >
          <h1 className="text-6xl font-bold tracking-tight leading-none">
            Start a project
          </h1>
          <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
            Contact us
          </button>
        </div>
        <p
          className={`text-sm text-zinc-500 font-medium ${
            name == "first" ? "visible" : "invisible"
          }`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  );
};

export default Card;
