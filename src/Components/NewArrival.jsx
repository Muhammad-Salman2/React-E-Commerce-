import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

// import playstation from "../assets/images/playstation.png";
// import girl from "../assets/images/girl.jpeg";
// import wirless_speaker from "../assets/images/speaker.png";
// import perfuem from "../assets/images/perfuem.png";

import playstation from "../assets/images/Frame 684.png";
import women from "../assets/images/woman.png";
import speaker from "../assets/images/Frame 686.png";
import gucci from "../assets/images/Frame 687.png";


export default function Newarrival() {
  return (
    <>
      <div className="newarrival-box ">
        <div className="newarrival-Div">
          <div className="newarrival-rebbox"></div>
          <p>Categories</p>
        </div>
        <div className="newarrival-heading">
          <p>New Arrival</p>
          <div className="newarrival-arrows">
            <span>
              <GoArrowLeft />
            </span>
            <span>
              <GoArrowRight />
            </span>
          </div>
        </div>

        <div className="arrivalproduct-main">
          <div className="playstation">
            <img src={playstation} alt="playstation" />
          </div>
          <div className="second-div">
            <div className="girl-img">
              <img src={women}  alt="women" />
            </div>
            <div className="third-div">
              <div className="wirless-speaker">
                <img src={speaker} alt="wirless_speaker" />
              </div>
              <div>
                <img src={gucci} alt="perfuem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
