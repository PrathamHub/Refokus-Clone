import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Work from "./component/Work";
import Stripes from "./component/stripes";
import Products from "./component/Products";
import Product from "./component/Product";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full bg-black text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      {/* <Product /> */}
    </div>
  );
}

export default App;
