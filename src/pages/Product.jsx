import { CiHeart } from "react-icons/ci";
import eyesimg from "../assets/images/Group.png";
import star from "../assets/images/star.png";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Cards";

export default function Products(Props) {
  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);
    console.log(response.data.products);

    const products = response?.data?.products;

    setProducts(products);
  };
  useEffect(() => {
    getProductData();
  }, []);

      const  [searchTerm, setSearchTerm] = useState("");
        console.log(searchTerm);

        const searchProduct = ()=>{
          const result = products?.filter((item)=>{
            return item.title === searchTerm;
          })
        }
        // item.title.toLowerCase().includes(searchTerm);
        const searchResult =  searchProduct()
  return (
    <>
      {products === null ?  "Loding... Please wait " : null}


        <input type="Search"  placeholder="Search item"className="input" onChange={(event)=>{
          // console.log(event.target.value)
          setSearchTerm(event.target.value?.toLowerCase())

        }}/>

        
      <div className="prduduct-flexbox">
        {products?.map((item) => (
          <Card key={item.id} productimg={item.thumbnail} item_name = {item.title}  price = {item.price}  />
        ))}
      </div>
    </>
  );
}
