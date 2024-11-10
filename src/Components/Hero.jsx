import { FaAngleRight } from "react-icons/fa6";
import iphonelogo from '../assets/apple logo.png';
import { FaArrowRight } from "react-icons/fa6";


export default function Hero() {
  return (
    <>
      <div className="li-hero-main">
        <div className="hero-list">
          <ul>
            <li>
              Woman’s Fashion <FaAngleRight />
            </li>
            <li>
              Men’s Fashion <FaAngleRight />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="center-line">
          <div className="slider">
            <div className="slider-left">
              <span className="iphone-logo">
             <p> iPhone 14 Series</p>
              </span>
              <span className="discount-para">
                <h1>Up to 10% off Voucher</h1>
              </span>
              <span className="shop-now">
                <p>Shop Now <FaArrowRight className="arrow"/></p>
              </span>
            </div>
            <div className="slider-right">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
