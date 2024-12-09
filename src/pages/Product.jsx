// import { CiHeart } from "react-icons/ci";
// import eyesimg from "../assets/images/Group.png";
// import star from "../assets/images/star.png";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Cards";
import not_found from "../assets/images/not-found.webp"
import useProduct from "../hooks/useProduct";

export default function Products(Props) {
  const {products , isLodidng, error} = useProduct("limit=150&skip=78")

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
        <input
          type="Search"
          placeholder="Search item"
          className="input"
          onChange={(event) => {
            console.log(event.target.value);
            setSearchTerm(event.target.value);
          }}
        />
        <div className="prduduct-flexbox">
          {searchResult.length === 0 ? <img src={ not_found} alt="product not found"  /> : ""}
          {searchResult?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              productimg={item.thumbnail}
              item_name={item.title}
              price={item.price}
              discount = {item.discountPercentage}
              // discountprice ={`$${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}`}
              
              />
                
          ))}
        </div>
      </div>
    </>
    
  );
}

