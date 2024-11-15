
// import controller from "../assets/images/Controller.png"
import Coat from "../assets/images/Gucci-coat 1.png"
import star from "../assets/images/star.png"



export default function Bestproductcard(){
    return(
        <>
        <div className="card">
            <div className="images-div"><img src={Coat} alt="Controller"  /></div>
            <div className="item-description">
                <span className="havit"><p>HAVIT HV-G92 Gamepad</p></span>
                <span className="item-price"><p className="first-price">$120</p> <p className="secind-price"><s>$160</s></p></span>
                <span className="icon-div">
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <span className="soldout-items"><p>(88)</p></span>
                </span>
                
            </div>
            
        </div>
        
        </>
    )
}



