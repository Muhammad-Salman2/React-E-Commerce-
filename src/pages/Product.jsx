// import { CiHeart } from "react-icons/ci";
// import eyesimg from "../assets/images/Group.png";
// import star from "../assets/images/star.png";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Cards";
import not_found from "../assets/images/not-found.webp"
import useProduct from "../hooks/useProduct";

export default function Products(Props) {
  const { products, isLodidng, error } = useProduct("limit=150&skip=78")

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const searchProduct = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return result || [];
  };
  // item.title.toLowerCase().includes(searchTerm);
  const searchResult = searchProduct();
  return (
    <>
      {products === null ? "Loding... Please wait " : null}

      <div className="product-main">
        {/* <input
          type="Search"
          placeholder="Search item"
          className="input"
          onChange={(event) => {
            console.log(event.target.value);
            setSearchTerm(event.target.value);
          }}
        /> */}

        <form
          className="max-w-md mr-[265px]">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="Search"
              placeholder="Search"
              onChange={(event) => {
                console.log(event.target.value);
                setSearchTerm(event.target.value);
              }}
              className="w-[800px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>

        <div className="prduduct-flexbox">
          {searchResult.length === 0 ? <img src={not_found} alt="product not found" /> : ""}
          {searchResult?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              productimg={item.thumbnail}
              item_name={item.title}
              oldprice={item.price}
              discount={Math.round(item.discountPercentage)}
              rating={item.rating}
              discountedRate={`$${(
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2)}`}
            // discountprice ={`$${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}`}

            />



          ))}
        </div>
      </div>
    </>

  );
}

