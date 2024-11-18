import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";







export default function Newarrival() {
    return (
        <>
            <div className="newarrival-box ">
                <div className="newarrival-Div">
                    <div className="newarrival-rebbox"></div>
                    <p >Categories</p>
                </div>
                <div className="newarrival-heading">
                    <p>Browse By Category</p>
                    <div className="newarrival-arrows">
                                <span><GoArrowLeft /></span>
                                <span><GoArrowRight /></span>
                    </div>
                </div>
            </div>
        </>

    )
}