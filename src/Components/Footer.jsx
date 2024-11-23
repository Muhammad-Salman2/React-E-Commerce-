import qrcode from "../assets/images/qr code2.png"
import appstore from "../assets/images/appstore.png"
import playstore from "../assets/images/playstore.png"
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";


export default function Footer(){
    return(
        <>
        <div className="footer_main">
            <div className="footer">
                <div className="page-description1">
                    <p>Exclusive</p>
                    <li>Subscribe</li>
                    <li>Get 10% off your first order</li>
                    <li className="input-li"><input type="email" placeholder="Enter your email"/></li>
                </div>
                <div className="page-description2">
                    <p>Support</p>
                    <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                    <li>exclusive@gmail.com</li>
                    <li>+88015-88888-9999</li>
                </div>
                <div className="page-description3">
                    <p>Account</p>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </div>
                <div className="page-description4">
                    <p>Quick</p>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </div>
                <div className="page-description5">
                    <p>Download App</p>
                    <li>Save $3 with App New User Only</li>
                    <div>
                        <img src={qrcode} alt="qrcode " />
                        <div>
                            <img src={appstore} alt="aapstore" className="appstore" />
                            <img src={playstore} alt="playstore"  className="playstore"  />
                        </div>
                    </div>
                        <div className="contact-icons">
                            <RiFacebookLine />
                            <FiTwitter />
                            <FaInstagram />
                            <RiLinkedinLine />
                        </div>
                   

                </div>
            </div>
            <p className="copyright">Copyright Rimel 2022. All right reserved</p>
        </div>
        </>
    )
}
