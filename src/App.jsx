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
    <div className="testing">

    </div>
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
