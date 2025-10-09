import React from "react";


export default function Banner() {
    return (
        <>
            {/* for all screen*/}
            <div className="hidden sm:flex w-full h-14 bg-slate-950  items-center justify-around md:justify-center lg:justify-end xl:justify-end">
                <div className=" sm: flex  items-center justify-center w-fit h-12 ">
                    <p className="sm:text-[14px] text-white my-auto xl:text-[14px]" >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p><p className="sm:text-white hover:cursor-pointer text-[14px] pl-2 font-semibold">ShopNow</p>

                    <span className=" sm:flex items-center justify-between ml-3 md:ml-12 lg:ml-32 pr-6 xl:ml-72 ">
                        <select className="text-[14px] bg-slate-950 text-white">
                            <option>English</option>
                            <option>Urdu</option>
                        </select>
                    </span>

                </div>
            </div>


            {/* {only for mobile} */}
            <div className=" w-full h-16 bg-slate-950 flex items-center justify-center sm:hidden">
                <div className=" flex-col flex items-center justify-between w-full h-11   ">
                    <marquee behavior="scroll" direction="left" scrollamount="5" width="100%" vspace="px"> <p className="text-[14px] text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p></marquee>

                    <span className="w-[200px] flex items-center justify-between"><p className="text-white hover:cursor-pointer text-[14px]">ShopNow</p>
                        <select className="text-[14px] bg-slate-950 text-white">
                            <option>English</option>
                            <option>Urdu</option>
                        </select>
                    </span>

                </div>
            </div>
        </>
    )
}