import React from "react";
import Product from "./Product";

const Products = () => {
  var data = [
    {
      title: "arqitel",
      description:
        "kscx sdxcksdnx skdcnjskczx ksnclaslcx daksnczksz ldsxc kndx sdkcx, sklzxn aslzx  wscnlk,",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "kscx sdxcksdnx skdcnjskczx ksnclaslcx daksnczksz ldsxc kndx sdkcx, sklzxn aslzx  wscnlk,",
      live: true,
      case: false,
    },
    {
      title: "YIR 2025",
      description:
        "kscx sdxcksdnx skdcnjskczx ksnclaslcx daksnczksz ldsxc kndx sdkcx, sklzxn aslzx  wscnlk,",
      live: true,
      case: false,
    },
    {
      title: "Yahoo",
      description:
        "kscx sdxcksdnx skdcnjskczx ksnclaslcx daksnczksz ldsxc kndx sdkcx, sklzxn aslzx  wscnlk,",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "kscx sdxcksdnx skdcnjskczx ksnclaslcx daksnczksz ldsxc kndx sdkcx, sklzxn aslzx  wscnlk,",
      live: true,
      case: false,
    },
  ];
  return (
    <div className="mt-32">
      {data.map((val, idx) => (
        <Product val={val} key={idx} />
      ))}
    </div>
  );
};

export default Products;
