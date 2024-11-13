
import controller from "../assets/images/Controller.png"
import star from "../assets/images/star.png"



export default function Card(){
    return(
        <>
        <div className="card">
            <div className="images-div"><img src={controller} alt="Controller"  /></div>
            <div className="item-description">
                <span><p>HAVIT HV-G92 Gamepad</p></span>
                <span className="item-price"><p>$120</p> <p><s>$160</s></p></span>
                <span className="icon-div">
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <span><p>(88)</p></span>
                </span>
                
            </div>
            
        </div>
        
        </>
    )
}
