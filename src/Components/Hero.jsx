import { FaAngleRight } from "react-icons/fa6";



import discountimage from '../assets/images/fram.png'
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <>
      <div className="li-hero-main " >
          <div className="hero-list">
            <ul>
              <li><Link to ={"/home"} className="link">Woman’s Fashion</Link> <FaAngleRight /></li>
              <li><Link to ={"/home"} className="link">Men’s Fashion</Link> <FaAngleRight /></li>
              <li><Link to ={"/home"} className="link">Electronics</Link></li>
              <li><Link to ={"/home"} className="link">Home & Lifestyle</Link></li>
              <li><Link to ={"/home"} className="link">Medicine</Link></li>
              <li><Link to ={"/home"} className="link">Sports & Outdoor</Link></li>
              <li><Link to ={"/home"} className="link">Baby’s & Toys</Link></li>
              <li><Link to ={"/home"} className="link">Groceries & Pets</Link></li>
              <li><Link to ={"/home"} className="link">Health & Beauty</Link></li>
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
