import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Work from "./component/Work";
import Stripes from "./component/stripes";
import Products from "./component/Products";
import Product from "./component/Product";
import Maruess from "./component/Maruess";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full bg-black text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      {/* <Product /> */}
      <Maruess />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
