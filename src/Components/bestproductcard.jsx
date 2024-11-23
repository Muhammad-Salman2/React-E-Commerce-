
// import controller from "../assets/images/Controller.png"
import Coat from "../assets/images/Gucci-coat 1.png"
import star from "../assets/images/star.png"



export default function Bestproductcard(Props){
    return(
        <>
        <div className="card">
            <div className="images-div"><img src={Props.productimg} alt="Controller"  /></div>
            <div className="item-description">
                <span className="havit"><p>{Props.item_name}</p></span>
                <span className="item-price"><p className="first-price">{Props.price}</p> <p className="secind-price"><s>{Props.cutprice}</s></p></span>
                <span className="icon-div">
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <img src={star} alt="star"  className="star-icon"/>
                    <span className="soldout-items"><p>{Props.soldout}</p></span>
                </span>
                
            </div>
            
        </div>
        
        </>
    )
}



