import "./style.css";
import Firstpage from "./first-page.jsx";
import Hero from "./Components/Hero.jsx";
import Flashsale from "./Components/Flashsale.jsx";
import Catogary from "./Components/Catogary.jsx";
import Catogarycard from "./Components/Catogrycard.jsx";
import Bestproduct from "./Components/bestproduct.jsx";
import Bestproductcard from "./Components/bestproductcard.jsx";
import Enhancemusic from "./Components/EnhanceMusic.jsx";
import Exploreproduct from "./Components/exploreproduct.jsx";
import Explorproductcard from "./Components/ExploreProductcard.jsx";
import Newarrival from "./Components/NewArrival.jsx";
import Newarrivalproduct from "./Components/NewarrivalProduct.jsx";

import controller from "./assets/images/Controller.png"
import Keyboard from "./assets/images/Keyboard.png"
import screen from "./assets/images/screen.png"
import chear from "./assets/images/chear.png"

import Coat from "./assets/images/Gucci-coat 1.png"
import beg from "./assets/images/beg.png"
import bigspeaker from "./assets/images/bigspeaker.png"
import bookshelf from "./assets/images/smallbookshelf.png"

import caser from "./assets/images/caser.jpeg"
import camera from "./assets/images/camera.png"
import laptop from "./assets/images/laptop.png"
import shampo from "./assets/images/shampo.png"
import car from "./assets/images/car.png"
import shoes from "./assets/images/shoes.png"
import newcont from "./assets/images/newCont.png"
import jacket from "./assets/images/jacket.png"

import Home from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx'

import Card from "./Components/Flashsalecards.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Survicesicon from "./Components/SurviceIcon.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
 
  return (
    <>


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
           
        </Routes>







        <Firstpage />
      <div className="main">
        <Navbar />
        <Hero />
        <Flashsale />
        {/* <div className="card-main">
          <Card productimg = {controller}  item_name = "HAVIT HV-G92 Gamepad" price = "$960" cutprice = "$160" soldout = "(75)"/>
          <Card productimg = {Keyboard}  item_name = "AK-900 Wired Keyboard" price = "$370" cutprice = "$1160" soldout = "(99)"/>
          <Card productimg = {screen}  item_name = "IPS LCD Gaming Monitor" price = "$375" cutprice = "$400" soldout = "(99)"/>
          <Card productimg = {chear} item_name = "S-Series Comfort Chair " price = "$375" cutprice = "$400" soldout = "(88)"/>
        </div> */}
        <div className="View-all-products">
          <button>View All Products</button>
        </div>

          <Catogary />
          <Catogarycard />
          <Bestproduct />

          <div className="bestselingcard-main">
            <Bestproductcard productimg = {Coat}  item_name = "The north coat" price = "$260" cutprice = "$360" soldout = "(65)"/>
            <Bestproductcard productimg = {beg}  item_name = "Gucci duffle bag" price = "$960" cutprice = "$1160" soldout = "(62)"/>
            <Bestproductcard productimg = {bigspeaker}  item_name = "RGB liquid CPU Cooler" price = "$160" cutprice = "$170" soldout = "(85)"/>
            <Bestproductcard productimg = {bookshelf}  item_name = "Small BookSelf" price = "$360" cutprice = "$400" soldout = "(91)"/>
          </div>

          <Enhancemusic />
          <Exploreproduct/>


          <div className="exploreproductcard-main">
           

              <Explorproductcard productimg = {caser}  item_name = "Breed Dry Dog Food" price = "$100" cutprice = "$360" soldout = "(68)"/>
              <Explorproductcard productimg = {camera}  item_name = "CANON EOS DSLR Camera" price = "$360" cutprice = "$460" soldout = "(31)"/>
              <Explorproductcard productimg = {laptop}  item_name = "ASUS FHD Gaming Laptop" price = "$700" cutprice = "8360" soldout = "(73)"/>
              <Explorproductcard productimg = {shampo}  item_name = "Curology Product Set " price = "$500" cutprice = "$660" soldout = "(15)"/>
            
              <Explorproductcard productimg = {car}  item_name = "Kids Electric Car" price = "$960" cutprice = "$360" soldout = "(65)"/>
              <Explorproductcard productimg = {shoes}  item_name = "Jr. Zoom Soccer Cleats" price = "$1160" cutprice = "$1200" soldout = "(42)"/>
              <Explorproductcard productimg = {newcont}  item_name = "GP11 Shooter USB Gamepad" price = "$660" cutprice = "$690" soldout = "(86)"/>
              <Explorproductcard productimg = {jacket}  item_name = "Quilted Satin Jacket" price = "$660" cutprice = "$700" soldout = "(73)"/>
            
              <div className="exploreproduct-button">
                    <button>View All</button>
              </div>
          </div>

          <Newarrival/>
          <Newarrivalproduct/>
          <Survicesicon/>
          <Footer/>
        </div>
    </>
  );
}

export default App;