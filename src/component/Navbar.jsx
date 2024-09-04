import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl  mx-auto  py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex">
        <h3 className="font-bold">Refokus</h3>
        <div className="flex gap-10 font-bold ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((e, i) =>
            e.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-400 "></span>
            ) : (
              <a
                href="#"
                className="flex items-center gap-1 rounded-full text-sm"
                key={i}
              >
                {i === 1 && (
                  <span className="inline-block bg-green-500 w-1 h-1"></span>
                )}
                {e}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
