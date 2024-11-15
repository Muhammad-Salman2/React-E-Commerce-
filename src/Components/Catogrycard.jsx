import { IoPhonePortraitOutline } from "react-icons/io5";

import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";







export default function Catogarycard(){
    return(
        <>
        <div className="Catogarycard">
            <div>
                <IoPhonePortraitOutline className="icons"/> 
                <p>Phone</p>
            </div>

            <div>
                <HiOutlineComputerDesktop className="icons"/>
                <p>Computer</p>
            </div>

            <div>
                <BsSmartwatch className="icons"/>
                <p>SmartWatch</p>
            </div>

            <div>
                <IoCameraOutline className="icons"/>
                <p>Camera</p>
            </div>

            <div>
                <PiHeadphones className="icons"/>
                <p>HeadPhone</p>
            </div>

            <div>
                <LuGamepad className="icons"/>
                <p>Gaming</p>
            </div>
        </div>
        </>
    )
}