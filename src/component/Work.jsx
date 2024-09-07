import React from "react";

const Work = () => {
  var images = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-500.webp",
      top: "50%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-500.webp",
      top: "47%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp",
      top: "48%",
      left: "56%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[25vw] leading-none font-medium select-none  tracking-tight ">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full flex gap-2 ">
          {images.map((elem, idx) => {
            return (
              elem.isActive && (
                <img
                  className="w-52 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  key={idx}
                  alt=""
                  style={{ top: elem.top, left: elem.left }}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
