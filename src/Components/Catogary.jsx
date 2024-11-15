import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";







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
            </div>
        </>

    )
}