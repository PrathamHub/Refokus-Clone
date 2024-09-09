import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto  py-20 flex gap-2">
        <Card width={"basis-1/3"} name={"first"} />
        <Card width={"basis-2/3"} name={"second"} />
      </div>
    </div>
  );
};

export default Cards;
