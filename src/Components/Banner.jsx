import React from "react";


export default function Banner() {
    return (
        <>
        {/* for dekstop */}
                <div className="banner ">
                   <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
                   <div>
                            <span id="shopnow">ShopNow</span>
                            <select>
                                <option>English</option>
                                <option>Urdu</option>
                            </select>
                     </div>
                </div>




        {/* {for mobile}
                <div className="banner sm:hidden flex  ">
                  <marquee behavior="scroll" direction="left" scrollamount="5" width="100%" vspace="px"> <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span id="shopnow">ShopNow</span></p></marquee> 
                        <select>
                            <option>English</option>
                            <option>Urdu</option>
                        </select>
                </div> */}
        </>
    )
}