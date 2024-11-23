import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar">
          <span className="Exclusive">
            <p>Exclusive</p>
          </span>
          <span className="Home">
            <ul>
              <li><Link to ={"/"}></Link>Home</li>
              <li><Link to ={"/"}></Link>Contact</li>
              <li><Link to ={"/sig"}></Link>signup</li>
              <li><Link to ={"/signup"}></Link>About us</li>
            </ul>
          </span>

          <div className="search-or-icon">
          <div className="search">
            <input type="search" placeholder="What are you looking for?" />
            <IoIosSearch className="search-icon" />
          </div>

            <div className="icons">
              <FaRegHeart className="heart" />
              <IoCartOutline className="cart" />
              <RiAccountCircleLine className="account" />

            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}
