import axios from "axios";
import { useParams } from "react-router-dom";
import useSWR  from "swr";
import { TbTruckReturn } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import ReactStars from "react-stars";



export default function Productdetail() {


const params = useParams();
// console.log("product" , params)

const {data, error, isLoading} = useSWR(`https://dummyjson.com/products/${params.id}` ,axios)

console.log(data)

const product = data?.data;

const  [quentity, setquentity] = useState(0)
  return (
    <>

<div className="productdetail_main">
  <div className="productdiv"><img src={product?.thumbnail} alt="productImage" /></div>
  <div className="product_dec">
      <div className="title"><p>{product?.title}</p> </div>
      <div className="rating">
        <span className="detail-icon-div">
                      <ReactStars
                          className="react-stars"
                          count={5}
                          value={product?.rating}
                          edit={false}
                          size={20}
                          color2={"#FFAD33"}
                      />

                      <span className="detail-rating"><p>({product?.rating})</p></span>
                      <p className="or">|</p>  <p className="instock">{product?.availabilityStatus}</p>
          </span>
        
        </div>
      <div className="price"><p>${product?.price}</p>
      </div>
      <div className="descrition"><p>{product?.description}</p></div>
      <div className="price_set">
        <div className="set">
            <div className="setPrice">
              <button className="minu" onClick={()=>setquentity(quentity - 1)}><p>-</p></button>
              <div className="qty">{quentity}</div>
              <button className="plu" onClick={()=>setquentity(quentity + 1)}>+</button>
            </div>
            <button className="buy">Buy Now</button>
            <div className="heartt"><FaRegHeart /></div>
        </div>
      </div>
        <div className="policy">
            <div className="delvery-section">
              <div className="delivery-icon"><TbTruckDelivery className="icon"/></div>
              <div className="free ">
                <p className="text">Free Delivery</p>
                <p className="text-[12px] ">Enter your postal code for Delivery Availability</p>
              </div>
            </div>


            <div className="return-section">
              <div className="delvery-section">
                  <div className="return-delivery-icon"><TbTruckReturn className="icon"/></div>
                  <div className="free">
                    <p className="text">Return Delivery</p>
                    <p className="text-[12px] ">{product?.returnPolicy}</p>
                  </div>
              </div>
            </div>
        </div>
  </div>
</div>

    </>
  );
}
