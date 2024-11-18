import playstation from "../assets/images/playstation.png";
import girl from "../assets/images/girl.jpeg";
import wirless_speaker from "../assets/images/speaker.png";
import perfuem from "../assets/images/perfuem.png";

export default function Newarrivalproduct() {
  return (
    <>
      <div className="arrivalproduct-main">
        <div className="playstation">
          <img src={playstation} alt="playstation" />
          {/* <div className="arrivalproduct-discription">
            <p>PlayStation 5</p>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <p><a href="">Shop Now</a></p>
          </div> */}
        </div>
        <div className="second-div">
            <div className="girl-img">
              <img src={girl} alt="girl" />
            </div>
          <div className="third-div">
              <div className="wirless-speaker"><img src={wirless_speaker} alt="wirless_speaker" /></div>
              <div ><img src={perfuem} alt="perfuem" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
