import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

import Card from "./Cards";

import controller from "../assets/images/Controller.png"
import Keyboard from "../assets/images/Keyboard.png"
import screen from "../assets/images/screen.png"
import chear from "../assets/images/chear.png"




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


                <div className="card-main">
          <Card productimg = {controller} discount = "-40%" item_name = "HAVIT HV-G92 Gamepad" price = "$960" cutprice = "$160" soldout = "(75)"/>
          <Card productimg = {Keyboard} discount = "-35%"  item_name = "AK-900 Wired Keyboard" price = "$370" cutprice = "$1160" soldout = "(99)"/>
          <Card productimg = {screen} discount = "-35%"  item_name = "IPS LCD Gaming Monitor" price = "$375" cutprice = "$400" soldout = "(99)"/>
          <Card productimg = {chear} discount = "-25%"  item_name = "S-Series Comfort Chair " price = "$375" cutprice = "$400" soldout = "(88)"/>
        </div>
        <div className="View-all-products">
          <button>View-all-products</button>
          
        </div>



            </div>
        </>
    )
}