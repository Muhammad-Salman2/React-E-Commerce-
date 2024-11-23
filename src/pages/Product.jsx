// import Card from "../Components/FlashsaleCards.jsx";



export default function Product() {
  return (
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
  );
}
