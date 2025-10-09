import axios from "axios";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { TbTruckReturn } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import ReactStars from "react-stars";



export default function Productdetail() {


  const params = useParams();
  // console.log("product" , params)

  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${params.id}`, axios)

  console.log(data)

  const product = data?.data;

  const [quentity, setquentity] = useState(0)
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
          {/* <div className="price"><p>${product?.price}</p> */}
          <div className="price">  <p>
            ${(quentity > 0
              ? product?.price * quentity
              : product?.price
            )?.toFixed(2)}
          </p>
          </div>
          <div className="descrition"><p>{product?.description}</p></div>
          <div className="price_set">
            <div className="set">
              <div className="setPrice">
                {/* <button className="minu" onClick={() => setquentity(quentity - 1)}><p>-</p></button> */}
                <button className="minu" onClick={() => setquentity(quentity > 0 ? quentity - 1 : 0)}>
                  <p>-</p>
                </button>
                <div className="qty">{quentity}</div>
                <button className="plu" onClick={() => setquentity(quentity + 1)}>+</button>
              </div>

              <button className="buy">Buy Now</button>
              <div className="heartt">

                <div class="like-wrapper">
                  <input class="check" type="checkbox" id="like-toggle" />
                  <label class="container" for="like-toggle">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon inactive"
                    >
                      <path
                        d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon active"
                    >
                      <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                      ></path>
                    </svg>


                  </label>
                </div>

              </div>
            </div>
          </div>
          <div className="policy">
            <div className="delvery-section">
              <div className="delivery-icon"><TbTruckDelivery className="icon" /></div>
              <div className="free ">
                <p className="text">Free Delivery</p>
                <p className="text-[12px] ">Enter your postal code for Delivery Availability</p>
              </div>
            </div>


            <div className="return-section">
              <div className="delvery-section">
                <div className="return-delivery-icon"><TbTruckReturn className="icon" /></div>
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
