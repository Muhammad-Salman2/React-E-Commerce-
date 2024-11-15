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
import Exploreourproduct from "./Components/ExploreOurProduct.jsx";

function App() {
  return (
    <>
      <div className="main">
        <Firstpage />
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

      <div className="exploreproduct-main">
        <Exploreourproduct />
        <Exploreourproduct />
        <Exploreourproduct />
        <Exploreourproduct />
        <br />
        <Exploreourproduct />
        <Exploreourproduct />
      </div>
    </>
  );
}

export default App;
