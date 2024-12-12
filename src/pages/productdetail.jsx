import axios from "axios";
import { useParams } from "react-router-dom";
import useSWR  from "swr";

import { FaRegHeart } from "react-icons/fa";



export default function Productdetail() {


const params = useParams();
// console.log("product" , params)

const {data, error, isLoading} = useSWR(`https://dummyjson.com/products/${params.id}` ,axios)

console.log(data)

const product = data?.data;


  return (
    <>

<div className="productdetail_main">
  <div className="productdiv"><img src={product?.thumbnail} alt="productImage" /></div>
  <div className="product_dec">
      <div className="title"><p>{product?.title}</p></div>
      <div className="rating"><p>{product?.rating}</p></div>
      <div className="price"><p>${product?.price}</p></div>
      <div className="descrition"><p>{product?.description}</p></div>
      <div className="price_set">
        <div className="set">
          <div className="setPrice">
            <button className="minu"><p>-</p></button>
            <div className="qty">20</div>
            <button className="plu">+</button>
          </div>
        <button className="buy">Buy Now</button>
          <div className="heartt"><FaRegHeart /></div>
        </div>
      </div>
  </div>
</div>

    </>
  );
}
