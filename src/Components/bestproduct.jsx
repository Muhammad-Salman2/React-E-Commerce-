import Card from "./Cards";

import Coat from "../assets/images/Gucci-coat 1.png"
import beg from "../assets/images/beg.png"
import bigspeaker from "../assets/images/bigspeaker.png"
import bookshelf from "../assets/images/smallbookshelf.png"
import useProduct from "../hooks/useProduct";

export default function Bestproduct() {
  const { products, isLodidng, error } = useProduct("limit=4&skip=78")
  return (
    <>
    <div className= " mt-3">
    
      <div className="bestproduct-box ">
        <div className="bestproduct-Div">
          <div className="bestproduct-rebbox"></div>
          <p>This Month</p>
        </div>
        <div className="bestproduct-heading">
          <p>Best Selling Products</p>
          <div className="bestproduct-button">
            <button>View All</button>
          </div>
        </div>
      </div>


      <div className="card-main2">
        {products?.map((item)=>(

          <Card key={item.id} productimg = {item.thumbnail} rating={item.rating}  item_name = {item.title} price = {Math.round(item.price)} discount = {Math.round(item.discountPercentage)} />
        ))}
        </div>
    </div>   
    </>
  );
}
