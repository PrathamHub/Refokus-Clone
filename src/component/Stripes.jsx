import React from "react";
import Stripe from "./Stripe";
import { SiAlpinelinux } from "react-icons/si";

const stripes = () => {
  var data = [
    {
      url: "https://png.pngtree.com/template/20200426/ourmid/pngtree-initial-letter-hg-logotype-company-name-design-image_366311.jpg",
      number: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9pTu49bCnrpB-Uj2Y3nM72Kbc8jy_EO0fQ&s",
      number: 2,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbImfsA8Fr59TGrrCOytRYKI6CvFhF1IytBQ&s",
      number: 11,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rZ0ZM9Rc4PQoeGtuunkpCKYGgmivRamTgA&s",
      number: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBV8Nvth7qD5SqxNL-YxjHkA7HMqQ97aJlw&s",
      number: 2,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfNrkI4Kxc2g9QOY2Bg8_sr20DALHVR4oPw&s",
      number: 11,
    },
  ];
  return (
    <div className="flex  items-center mt-20">
      {data.map((e, i) => (
        <Stripe val={e} key={i} />
      ))}
    </div>
  );
};

export default stripes;
