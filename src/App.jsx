import "./style.css";
import Firstpage from "./first-page.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Flashsale from "./Components/Flashsale.jsx";
import Card from "./Components/Flashsalecards.jsx";
import Catogary from "./Components/Catogary.jsx";
import Catogarycard from "./Components/Catogrycard.jsx";
import Bestproduct from "./Components/bestproduct.jsx";
import Bestproductcard from "./Components/bestproductcard.jsx";
import Enhancemusic from "./Components/EnhanceMusic.jsx";
import Exploreproduct from "./Components/exploreproduct.jsx";
import Explorproductcard from "./Components/ExploreProductcard.jsx";
import Newarrival from "./Components/NewArrival.jsx";
import Newarrivalproduct from "./Components/NewarrivalProduct.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/Aboutus.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Survicesicon from "./Components/SurviceIcon.jsx";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/about",
  //     element:<About/>
  //   },
  //   {
  //     path:"/contact",
  //     element:<Contact/>
  //   },
  //   {
  //     path:"/detail",
  //     element:<Details/>
  //   }
  // ])
  return (
    <>

    
        <Firstpage />
      <div className="main">
        <Navbar />
        <Hero />
        <Flashsale />
        <div className="card-main">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="View-all-products">
          <button>View All Products</button>
        </div>

          <Catogary />
          <Catogarycard />
          <Bestproduct />

          <div className="bestselingcard-main">
            <Bestproductcard />
            <Bestproductcard />
            <Bestproductcard />
            <Bestproductcard />
          </div>

          <Enhancemusic />
          <Exploreproduct/>


          <div className="exploreproductcard-main">
           

              <Explorproductcard />
              <Explorproductcard />
              <Explorproductcard />
              <Explorproductcard />
            
              <Explorproductcard />
              <Explorproductcard />
              <Explorproductcard />
              <Explorproductcard />
            
              <div className="exploreproduct-button">
                    <button>View All</button>
              </div>
          </div>

          <Newarrival/>
          <Newarrivalproduct/>
          <Survicesicon/>
        </div>
    </>
  );
}

export default App;
