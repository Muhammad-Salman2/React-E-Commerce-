import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function Survicesicon() {
  return (
    <>
      <div className="survicesicon-main">
        <div>
          <TbTruckDelivery className="survice-icons"/>
          <div>
            <p>FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
          <RiCustomerServiceLine className="survice-icons"/>
          <div>
            <p>24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div>
          <AiOutlineSafetyCertificate className="survice-icons"/>
          <div>
            <p>MONEY BACK GUARANTEE</p>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}
