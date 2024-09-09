import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-5">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-600 capitalize">Socials</h4>
            {["instagram", "twitter (x)?", "Linkedin"].map((item, index) => {
              return (
                <div key={index}>
                  <a
                    href="#"
                    className="block mt-3 text-zinc-600 capitalize
                    "
                  >
                    {item}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-600 capitalize">Socials</h4>
            {["instagram", "twitter (x)?", "Linkedin"].map((item, index) => {
              return (
                <div key={index}>
                  <a
                    href="#"
                    className="block mt-3 text-zinc-600 capitalize
                    "
                  >
                    {item}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="basis-1/2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              nesciunt temporibus ad laboriosam aut et!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
