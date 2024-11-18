import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";







export default function Exploreproduct() {
    return (
        <>
            <div className="exploreproduct-box ">
                <div className="exploreproduct-Div">
                    <div className="exploreproduct-rebbox"></div>
                    <p >Categories</p>
                </div>
                <div className="exploreproduct-heading">
                    <p>Browse By Category</p>
                    <div className="exploreproduct-arrows">
                                <span><GoArrowLeft /></span>
                                <span><GoArrowRight /></span>
                    </div>
                </div>
            </div>
        </>

    )
}

