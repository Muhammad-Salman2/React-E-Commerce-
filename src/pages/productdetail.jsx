import axios from "axios";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR  from "swr";
import useProduct from "../hooks/useProduct";


export default function Productdetail() {

  const {products , isLodidng, error} = useProduct()

// const API_KEY = "https://dummyjson.com/products";

// const [products, setProducts] = useState(null);

// const getProductData = async () => {
//   const response = await axios(API_KEY);
//   console.log(response.data.products);

//   const products = response?.data?.products;

//   setProducts(products);
// };
// useEffect(() => {
//   getProductData();
// }, []);


  return (
    <>

<div>

</div>







      {/* <div>
        <div>
            <img src={item.thumbnail} />
        </div>
        <div></div>
      </div> */}
    </>
  );
}
