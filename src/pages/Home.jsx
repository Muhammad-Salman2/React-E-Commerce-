import Bestproduct from "../Components/bestproduct.jsx";
import Catogary from "../Components/Catogary.jsx";
import Enhancemusic from "../Components/EnhanceMusic.jsx";
import Exploreproduct from "../Components/exploreproduct.jsx";
import Flashsale from "../Components/Flashsale.jsx"
import Hero from "../Components/Hero.jsx";
import Newarrival from "../Components/NewArrival.jsx";
import Survicesicon from "../Components/SurviceIcon.jsx";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Flashsale />
        <Catogary />
        <Bestproduct/>
        <Enhancemusic/>
        <Exploreproduct/>
        <Newarrival/>
        <Survicesicon/>

      </div>
    </>
  );
}
