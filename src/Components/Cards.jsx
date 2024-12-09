

// import star from "../assets/images/star.png"
import { CiHeart } from "react-icons/ci";
import eyesimg from '../assets/images/Group.png';
import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import ReactStars from "react-stars";



export default function Card(Props){
    const {products , isLodidng, error} = useProduct()
    return(
        <>
        
        <Link to ={`/productdetail/${Props.id}`}>
        <div className="card">
            <div className="images-div"><img src={Props.productimg} alt="Controller"  />

            {Props.discount ? <div className="discount">-{Props.discount}%</div> :null}
                <div className="liked">
                    <button><CiHeart /></button>
                    <button><img src={eyesimg} alt="eyesimg"  /></button>
                </div>
            </div>

            <div className="item-description">
                <span className="havit"><p>{Props.item_name}</p></span>
                <span className="item-price"><p className="first-price">${Props.price}</p> <p className="secind-price"><s></s></p></span>
                    <span className="icon-div">
                        <ReactStars
                            className="react-stars"
                            count={5}
                            value={Props.rating}
                            edit={false}
                            size={20}
                            color2={"#FFAD33"}
                        />
                    </span>
                
            </div>
            
        </div>
        </Link>
        
        </>
    )
}
