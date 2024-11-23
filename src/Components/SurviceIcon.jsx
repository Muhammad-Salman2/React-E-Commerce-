import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function Survicesicon() {
  return (
    <>
      <div className="survicesicon-main">
        <div>
            <div className="icon_div">
                <TbTruckDelivery className="survice-icons"/>
            </div>
          <div className="paragraph-div">
            <p className="first-para">FREE AND FAST DELIVERY</p>
            <p className="second-para">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
            <div className="icon_div">
                <RiCustomerServiceLine className="survice-icons"/>
            </div>
          <div className="paragraph-div">
            <p className="first-para">24/7 CUSTOMER SERVICE</p>
            <p className="second-para">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div>
            <div className="icon_div">
                <AiOutlineSafetyCertificate className="survice-icons"/>
            </div>
          <div className="paragraph-div">
            <p className="first-para">MONEY BACK GUARANTEE</p>
            <p className="second-para">We reurn money within 30 days</p>
          </div>
        </div>
      </div>

      <div></div>
      
    </>
  );
}
