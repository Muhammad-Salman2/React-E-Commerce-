import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

import Card from "./Cards";

import controller from "../assets/images/Controller.png";
import Keyboard from "../assets/images/Keyboard.png";
import screen from "../assets/images/screen.png";
import chear from "../assets/images/chear.png";
import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";

export default function Flashsale() {
  const { products, isLodidng, error } = useProduct("limit=4&skip=0");

  return (
    <>
      {isLodidng ? "looding" : ""}
      {error}

      <div className="flashsale-box ">
        <div className="todays-Div">
          <div className="rebbox"></div>
          <p>Today's</p>
        </div>
        <div>
          <div className="flashsale-heading">
            <p>Flash Sales</p>
            <span className="timing">
              <span>
                <p className="para">Days</p>
                <p>03</p>
              </span>
              <p className="semicolen">:</p>
              <span>
                <p className="para">Hour</p>
                <p>23</p>
              </span>
              <p className="semicolen">:</p>
              <span>
                <p className="para2">Minnutes</p>
                <p>19</p>
              </span>
              <p className="semicolen">:</p>
              <span>
                <p className="para2">Seconds</p>
                <p>56</p>
              </span>
            </span>
            <div className="arrows">
              <span>
                <GoArrowLeft />
              </span>
              <span>
                <GoArrowRight />
              </span>
            </div>
          </div>
        </div>

        <div className="card-main1">
          {products?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              productimg={item.thumbnail}
              item_name={item.title}
              oldprice={item.price}
              discount={Math.round(item.discountPercentage)}
              rating={item.rating}
              oldRate={`$${item.price}`}
              discountedRate={`$${(
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2)}`}
            />
          ))}
        </div>

        <div className="View-all-products">
          <button>
            {" "}
            <Link to={"/product"}>View-all-products</Link>
          </button>
        </div>
      </div>
    </>
  );
}
