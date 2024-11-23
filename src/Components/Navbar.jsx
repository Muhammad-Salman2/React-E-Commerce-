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
              {Link.map((item,i)=>(
                <li>
                  <Link to ={item.Link}>{item.title}</Link>
                </li>
              ))}
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
