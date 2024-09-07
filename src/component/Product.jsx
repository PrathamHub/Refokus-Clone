import React from "react";
import Button from "./Button";

const Product = ({ val, idx }) => {
  return (
    <div className="w-full py-5 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-10">
        <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="w-1/3 ">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-10">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
