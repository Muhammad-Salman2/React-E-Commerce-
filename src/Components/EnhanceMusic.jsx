import speaker2 from "../assets/images/new.png"



export default function Enhancemusic() {
  return (
    <>
      <div className="Enhancemusic-main">
        <div className="flexbox">
          <div className="content">
            <div className="content1"><p>Categories</p></div>
            <div className="content2"><p>Enhance Your Music Experience</p></div>
            <div className="content3">
                <div><p className="Day">23</p><p className="thisday">Hours</p></div>
                <div><p className="Day">05</p><p className="thisday">Days</p></div>
                <div><p className="Day">59</p><p className="thisday">Minutes</p></div>
                <div><p className="Day">35</p><p className="thisday">Seconds</p></div>
            </div>

            <button className="buynow">Buy Now!</button>
          </div>
             <div className="speaker">
                <img src={speaker2} alt="speaker-Image"  />
             </div>
        </div>
      </div>
    </>
  );
}
