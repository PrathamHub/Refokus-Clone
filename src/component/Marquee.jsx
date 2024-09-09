import React from "react";

const Marquee = ({ imagesurl }) => {
  return (
    <div className="flex gap-20 py-5 overflow-hidden">
      {imagesurl.map((image, index) => {
        return (
          <div key={index} className="logo-container">
            <img
              src={image}
              alt="Company Logo"
              className="logo w-24 h-24 object-contain flex-shrink-0"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Marquee;
