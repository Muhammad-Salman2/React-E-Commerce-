import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";







export default function Catogary() {
    return (
        <>
            <div className="flashsale-box ">
                <div className="todays-Div">
                    <div className="rebbox"></div>
                    <p >This Month</p>
                </div>
                <div className="flashsale-heading">
                    <p>Browse By Category</p>
                </div>
                <div className="arrows">
                            <span><GoArrowLeft /></span>
                            <span><GoArrowRight /></span>
                </div>
            </div>
        </>

    )
}