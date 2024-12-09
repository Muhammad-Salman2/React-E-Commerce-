import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Card from "./Cards";

import dog from "../assets/images/dog.png"
import camera from "../assets/images/camera.png"
import laptop from "../assets/images/laptop.png"
import shampo from "../assets/images/curologybg.png"
import car from "../assets/images/car.png"
import shoes from "../assets/images/shoes.png"
import newcont from "../assets/images/newCont.png"
import jacket from "../assets/images/jacket.png"
import useProduct from "../hooks/useProduct";

export default function Exploreproduct() {
  const {products , isLodidng, error} = useProduct("limit=8&skip=110")
  console.log(products)
  return (
    <>
      <div className="exploreproduct-box ">
        <div className="exploreproduct-Div">
          <div className="exploreproduct-rebbox"></div>
          <p>Our Products</p>
        </div>
        <div className="exploreproduct-heading">
          <p>Explore Our Products</p>
          <div className="exploreproduct-arrows">
            <span>
              <GoArrowLeft />
            </span>
            <span>
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="card-main  ">
        {products?.map((item)=>(

        <Card
        
          key={item.id}
          id={item.id}
          productimg={item.thumbnail}
          item_name={item.title}
          rating={item.rating}
          price={Math.round(item.price)}
          discount = {Math.round(item.discountPercentage)}
          oldprice


          // discountedRate={`$${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}`}
          
          
         
        />
        ))}
        
      
      </div>
      
    </>
  );
 
}
