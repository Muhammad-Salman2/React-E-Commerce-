import Card from "./Cards";

import Coat from "../assets/images/Gucci-coat 1.png"
import beg from "../assets/images/beg.png"
import bigspeaker from "../assets/images/bigspeaker.png"
import bookshelf from "../assets/images/smallbookshelf.png"

export default function Bestproduct() {
  return (
    <>
    <div className="mx-[92px] mt-3">
    
      <div className="bestproduct-box ">
        <div className="bestproduct-Div">
          <div className="bestproduct-rebbox"></div>
          <p>This Month</p>
        </div>
        <div className="bestproduct-heading">
          <p>Best Selling Products</p>
        </div>
        <div className="bestproduct-button">
          <button>View All</button>
        </div>
      </div>


      <div className="card-main2">
          <Card productimg = {Coat}  ri item_name = "HAVIT HV-G92 Gamepad" price = "$960" cutprice = "$160" soldout = "(75)"/>
          <Card productimg = {beg}   item_name = "AK-900 Wired Keyboard" price = "$370" cutprice = "$1160" soldout = "(99)"/>
          <Card productimg = {bigspeaker}   item_name = "IPS LCD Gaming Monitor" price = "$375" cutprice = "$400" soldout = "(99)"/>
          <Card productimg = {bookshelf}  item_name = "S-Series Comfort Chair " price = "$375" cutprice = "$400" soldout = "(88)"/>
        </div>
    </div>   
    </>
  );
}
