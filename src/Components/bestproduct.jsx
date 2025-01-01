import Card from "./Cards";

import Coat from "../assets/images/Gucci-coat 1.png";
import beg from "../assets/images/beg.png";
import bigspeaker from "../assets/images/bigspeaker.png";
import bookshelf from "../assets/images/smallbookshelf.png";
import useProduct from "../hooks/useProduct";

export default function Bestproduct() {
  const { products, isLodidng, error } = useProduct("limit=4&skip=43");
  return (
    <>
      {/* <div className=" mt-3"> */}
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
          
            <div className="card-main2">
              {products?.map((item) => (
                <Card
                  id={item.id}
                  key={item.id}
                  productimg={item.thumbnail}
                  rating={item.rating}
                  item_name={item.title}
                  oldprice={item.price}
                  discount={Math.round(item.discountPercentage)}
                  oldRate={`$${item.price}`}
                  discountedRate={`$${(
                    item.price -
                    (item.price * item.discountPercentage) / 100
                  ).toFixed(2)}`}
                />
              ))}
            </div>
        </div>

      {/* </div> */}
    </>
  );
}
