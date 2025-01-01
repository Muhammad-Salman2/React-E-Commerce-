import { FaAngleRight } from "react-icons/fa6";



import discountimage from '../assets/images/fram.png'
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <>
     <div className="hero_section mr-4 border  border-red-600 sm:hidden ">
          <img src={discountimage} alt="discountimage" className="slider"/>
       



        <div className="hero-list">
          <ul>
            <li><Link to={"/home"} className="link">Woman’s Fashion</Link> </li>
            <li><Link to={"/home"} className="link">Men’s Fashion</Link> </li>
            <li><Link to={"/home"} className="link">Electronics</Link></li>
            <li><Link to={"/home"} className="link">Home & Lifestyle</Link></li>
            <li><Link to={"/home"} className="link">Medicine</Link></li>
            <li><Link to={"/home"} className="link">Sports & Outdoor</Link></li>
            <li><Link to={"/home"} className="link">Baby’s & Toys</Link></li>
            <li><Link to={"/home"} className="link">Groceries & Pets</Link></li>
            <li><Link to={"/home"} className="link">Health & Beauty</Link></li>
          </ul>
        </div>
      </div>
















      {/* for medium screen */}
    <div className="hidden sm:flex flex-col  justify-items-center items-center lg:hidden " >
          <div className="">
              {/* <div className="sm:w-[700px] mt-6 "> */}
                  <img src={discountimage} alt="discountimage" className="sm:w-[700px] mt-6 object-cover md:w-[920px] "/>
              {/* </div> */}
          </div>



          <div className="sm:flex w-full md:w-full lg:border">
            <ul className="sm:flex flex-wrap items-center justify-center no-underline ">
              <li className="sm:p-[8px] "><Link to ={"/home"} className="link">Woman’s Fashion</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Men’s Fashion</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Electronics</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Home & Lifestyle</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Medicine</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Sports & Outdoor</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Baby’s & Toys</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Groceries & Pets</Link></li>
              <li className="sm:p-[8px]"><Link to ={"/home"} className="link">Health & Beauty</Link></li>
            </ul>
          </div>
    </div>




    {/* for large screen screen */}
    <div className="hidden lg:flex  justify-between mx-[60px] h-fit" >
        <div className="lg:flex border-r border-gray-400 w-56  ">
              <ul className="lg:flex flex-col  justify-between mt-9">
                <li className=""><Link to ={"/home"} className="link">Men’s Fashion</Link></li>
                <li className=""><Link to ={"/home"} className="link">Electronics</Link></li>
                <li className=""><Link to ={"/home"} className="link">Home & Lifestyle</Link></li>
                <li className=""><Link to ={"/home"} className="link">Woman’s Fashion</Link></li>
                <li className=""><Link to ={"/home"} className="link">Medicine</Link></li>
                <li className=""><Link to ={"/home"} className="link">Sports & Outdoor</Link></li>
                <li className=""><Link to ={"/home"} className="link">Baby’s & Toys</Link></li>
                <li className=""><Link to ={"/home"} className="link">Groceries & Pets</Link></li>
                <li className=""><Link to ={"/home"} className="link">Health & Beauty</Link></li>
              </ul>
        </div>
          
          <div className="">
              {/* <div className="lg:w-[700px] mt-6 lg: "> */}
                  <img src={discountimage} alt="discountimage" className="lg:w-[900px] mt-10 ml-6"/>
              {/* </div> */}
          </div>


    </div>

    </>
  );
}
