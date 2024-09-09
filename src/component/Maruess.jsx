import React from "react";
import Marquee from "./Marquee";
const Maruess = () => {
  var images = [
    [
      "https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn8TJNhAoJ_E8QSUmo2ZK5-51DbMK6hJYCIqk9Lsi6n2we-uc51md2kvu6pyV5EfTmDI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIbkdVadbaew-d0i6qKqAs35ibtaP3Wd48vtk33VtYparko9iNLKvXZwRbf4AmXvgTNM&usqp=CAU",
      "https://cdn.freebiesupply.com/logos/thumbs/1x/e-control-1-logo.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMCIcQh52Sv_vXXQcS8U0iXI_iLFWA0IbQC-mD62-wGxjatenEhOqjrOsDcKGZYardVM&usqp=CAU",
      "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",

      "https://cdn.freebiesupply.com/logos/thumbs/1x/google-2015-logo.png",

      "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
      "https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png",
    ],
    [
      "https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn8TJNhAoJ_E8QSUmo2ZK5-51DbMK6hJYCIqk9Lsi6n2we-uc51md2kvu6pyV5EfTmDI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIbkdVadbaew-d0i6qKqAs35ibtaP3Wd48vtk33VtYparko9iNLKvXZwRbf4AmXvgTNM&usqp=CAU",
      "https://cdn.freebiesupply.com/logos/thumbs/1x/e-control-1-logo.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMCIcQh52Sv_vXXQcS8U0iXI_iLFWA0IbQC-mD62-wGxjatenEhOqjrOsDcKGZYardVM&usqp=CAU",
      "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",

      "https://cdn.freebiesupply.com/logos/thumbs/1x/google-2015-logo.png",

      "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
      "https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png",
      //   "https://cdn.freebiesupply.com/logos/thumbs/1x/google-2015-logo.png",
    ],
  ];
  return (
    <div className="py-20 mt-20 space-y-10">
      {/* First Marquee - Right to Left */}
      <Marquee imagesurl={images[0]} direction="right" />

      {/* Second Marquee - Left to Right */}
      <Marquee imagesurl={images[1]} direction="left" />
    </div>
  );
};

export default Maruess;
