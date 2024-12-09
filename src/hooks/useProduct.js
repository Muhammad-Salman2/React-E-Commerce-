import axios from "axios";
import { useEffect, useState } from "react";




export default function useProduct(query){
    
        
    const API_KEY = `https://dummyjson.com/products?${query}`;

    const [products, setProducts] = useState(null);
  const [isLodidng, setisLodidng] = useState(false);
  const [error, setError] = useState(null);
  
  
  const getProductData = async () => {
    
    try{
      
      setisLodidng(true)
      const response = await axios(API_KEY);
      
      setProducts(response?.data?.products);
      
    }
    
    catch(error){
      console.log("error he" ,error)
      setError(error?.response?.statusText || "please try again leter");
      
    }  finally {
      setisLodidng(false)
    }
    
  }
    useEffect(() => {
      getProductData();
    }, []);
    
    return {
        products :products,
        isLodidng: isLodidng,
        error: error

    }
}