import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Card from "./Cards";

import dog from "../assets/images/dog.png"
import camera from "../assets/images/camera.png"
import laptop from "../assets/images/laptop.png"
import shampo from "../assets/images/curologybg.png"
import car from "../assets/images/car.png"
import shoes from "../assets/images/shoes.png"
import newcont from "../assets/images/newCont.png"
import jacket from "../assets/images/jacket.png"

export default function Exploreproduct() {
  return (
    <>
      <div className="exploreproduct-box ">
        <div className="exploreproduct-Div">
          <div className="exploreproduct-rebbox"></div>
          <p>Categories</p>
        </div>
        <div className="exploreproduct-heading">
          <p>Explore Our Products</p>
          <div className="exploreproduct-arrows">
            <span>
              <GoArrowLeft />
            </span>
            <span>
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="card-main  ">
        <Card
          productimg={dog}
          discount="-40%"
          item_name="HAVIT HV-G92 Gamepad"
          price="$960"
          cutprice="$160"
          soldout="(75)"
        />
        <Card
          productimg={camera}
          discount="-35%"
          item_name="AK-900 Wired Keyboard"
          price="$370"
          cutprice="$1160"
          soldout="(99)"
        />
        <Card
          productimg={laptop}
          discount="-35%"
          item_name="IPS LCD Gaming Monitor"
          price="$375"
          cutprice="$400"
          soldout="(99)"
        />
        <Card
          productimg={shampo}
          discount="-25%"
          item_name="S-Series Comfort Chair "
          price="$375"
          cutprice="$400"
          soldout="(88)"
        />

        <Card
          productimg={car}
          discount="-40%"
          item_name="HAVIT HV-G92 Gamepad"
          price="$960"
          cutprice="$160"
          soldout="(75)"
        />
        <Card
          productimg={shoes}
          discount="-35%"
          item_name="AK-900 Wired Keyboard"
          price="$370"
          cutprice="$1160"
          soldout="(99)"
        />
        <Card
          productimg={newcont}
          discount="-35%"
          item_name="IPS LCD Gaming Monitor"
          price="$375"
          cutprice="$400"
          soldout="(99)"
        />
        <Card
          productimg={jacket}
          discount="-25%"
          item_name="S-Series Comfort Chair "
          price="$375"
          cutprice="$400"
          soldout="(88)"
        />
      </div>
    </>
  );
}
