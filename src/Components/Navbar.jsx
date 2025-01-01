import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import shoplogo from "../assets/images/shoplogo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


export default function Navbar() {

// const darkMode = false;
// const [ishamBurgerOpen, setIshamBurgerOpen] = useState(true)


  return (
    <>
    {/* for dekstop */}
    <div className="nav  hidden sm:flex w-full h-24 border-bottom border-gray  items-center md:">
        <div className="sm:w-full h-12 flex items-center justify-around">
         
          <img src={shoplogo} className="sm:w-32" />

          <span className="sm:hidden lg:flex items-center w-96 h-11">
            <ul className="flex justify-between w-full">
              <li><Link to ={"/"}>Home</Link></li>
              <li><Link to ={"/about"}>About</Link> </li>
              <li><Link to ={"/signup"}>Signup</Link></li>
              <li><Link to ={"/contactus"}>Contact Us</Link></li>
              
            </ul>
          </span>

            <div className="search-or-icon">
              <div className="search">
                <input type="search" placeholder="What are you looking for?" />
                <IoIosSearch className="search-icon" />
              </div>
          
              {/* <MdLightMode className="sm:text-[25px]"/> */}
            
        
            </div>
            <MdLightMode className="text-[20px]  "/>
            <div className="sm:flex items-center justify-evenly w-44 md:w-52">
              <FaRegHeart className="sm:text-[20px] " />
              <IoCartOutline className="sm:text-[25px] hidden md:flex" />
              <RiAccountCircleLine className="sm:text-[25px] " />
              </div>
              <IoMenu className="sm:text-[25px] lg:hidden"/>
        </div>
    </div>
        




      {/* for mobile */}
       <div className=" w-full h-24 border border-black flex items-center sm:hidden">
        <div className="w-full h-12 flex items-center justify-around">
         
          <img src={shoplogo} className="w-32" />

          {/* <span className="Home">
            <ul>
              <li><Link to ={"/"}>Home</Link></li>
              <li><Link to ={"/about"}>About</Link> </li>
              <li><Link to ={"/signup"}>Signup</Link></li>
              <li><Link to ={"/contactus"}>Contact Us</Link></li>
              
            </ul>
          </span> */}

          <div className="search-or-icon">
            <div className="search">
              <input type="search" placeholder="What are you looking for?" />
              <IoIosSearch className="search-icon" />
            </div>

          </div>
         
            <MdLightMode className="text-[25px]"/>
            
        
              <RiAccountCircleLine className="text-[25px]" />
              <IoMenu className="text-[28px]"/>
        </div>
      </div>
              {/* <FaRegHeart className="heart" />
              <IoCartOutline className="cart" /> */}
    </>
    
  );
}
