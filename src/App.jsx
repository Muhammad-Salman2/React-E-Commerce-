import { Routes, Route, Outlet, Link } from "react-router-dom";

import Banner from "./Components/Banner.jsx";
import "./style.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";

import Signup from "./pages/signup.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/Aboutus.jsx";
import Products from "./pages/Product.jsx";
import Footer from "./Components/Footer.jsx";
import Productdetail from "./pages/productdetail.jsx";
import AddProduct from "./Components/addProduct.jsx";


function App() {
  return (
    <>
    {/* <div className="testing bg-black sm:bg-red-600  md:bg-green-500  lg:bg-blue-500  xl:bg-yellow-400 " >
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ex molestiae veniam illum velit saepe ad? Dolorem enim, soluta impedit sequi aliquid, deleniti, quae illo omnis quasi exercitationem quo! Beatae.
    </div> */}
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/Product/:id" element={<Productdetail />} />
        <Route path="/Product/addproduct" element={<AddProduct />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
