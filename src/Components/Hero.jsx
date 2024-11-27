import { FaAngleRight } from "react-icons/fa6";
import iphonelogo from '../assets/apple logo.png';
import { FaArrowRight } from "react-icons/fa6";

import discountimage from '../assets/images/fram.png'
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <>
      <div className="li-hero-main mx-[92px]" >
          <div className="hero-list">
            <ul>
              <li><Link to ={"/home"}>Woman’s Fashion</Link> <FaAngleRight /></li>
              <li><Link to ={"/home"}>Men’s Fashion</Link> <FaAngleRight /></li>
              <li><Link to ={"/home"}>Electronics</Link></li>
              <li><Link to ={"/home"}>Home & Lifestyle</Link></li>
              <li><Link to ={"/home"}>Medicine</Link></li>
              <li><Link to ={"/home"}>Sports & Outdoor</Link></li>
              <li><Link to ={"/home"}>Baby’s & Toys</Link></li>
              <li><Link to ={"/home"}>Groceries & Pets</Link></li>
              <li><Link to ={"/home"}>Health & Beauty</Link></li>
            </ul>
          </div>
          <div className="center-line">
              <div className="slider">
                  <img src={discountimage} alt="discountimage"/>
              </div>
          </div>
      </div>
    </>
  );
}
