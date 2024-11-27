import { BsSmartwatch } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCameraOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import { PiHeadphones } from "react-icons/pi";







export default function Catogary() {
    return (
        <>
            <div className="catogary-box ">
                <div className="catogary-Div">
                    <div className="catogary-rebbox"></div>
                    <p >Categories</p>
                </div>
                <div className="catogary-heading">
                    <p>Browse By Category</p>
                    <div className="catogary-arrows">
                                <span><GoArrowLeft /></span>
                                <span><GoArrowRight /></span>
                    </div>
                </div>




                <div className="Catogarycard">
            <div>
                <IoPhonePortraitOutline className="icons" /> 
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
            </div>
        </>

    )
}