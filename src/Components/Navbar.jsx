import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";



export default function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar">
          <span className="Exclusive">
            <h1>Exclusive</h1>
          </span>
          <span className="Home">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About us</li>
              <li>Details</li>
            </ul>
          </span>

          <div className="search-or-icon">
          <span className="search">
            <input type="search" placeholder="What are you looking for?" />
            <IoIosSearch className="search-icon" />
          </span>

          <span className="icons">
            <FaRegHeart className="heart" />
            <IoCartOutline className="cart" />
            <RiAccountCircleLine className="account" />

            </span>
          </div>
        </div>
      </div>
    </>
    
  );
}
