import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";




export default function Flashsale() {
    return (
        <>
            <div className="flashsale-box ">
                <div className="todays-Div">
                    <div className="rebbox"></div>
                    <p >Today's</p>
                </div>
                <div>
                    <div className="flashsale-heading">
                        <p>Flash Sales</p>
                        <span className="timing">
                            <span><p className="para">Days</p><p>03</p></span><p className="semicolen">:</p>
                            <span><p className="para">Hour</p><p>23</p></span><p className="semicolen">:</p>
                            <span><p className="para2">Minnutes</p><p>19</p></span><p className="semicolen">:</p>
                            <span><p className="para2">Seconds</p><p>56</p></span>
                        </span>
                        <div className="arrows">
                            <span><GoArrowLeft /></span>
                            <span><GoArrowRight /></span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}