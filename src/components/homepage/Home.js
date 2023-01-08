import React from "react";
import "../homepage/Landingpage.css";
import Heroimage from "./assets/Component.svg";
import Musiclogo from "./assets/music.svg";
import Livepeerlogo from "./assets/Livepeer.svg";
import Polygonelogo from "./assets/polygon.svg";
import nftportlogo from "./assets/nftport.svg";
import Zoralogo from "./assets/zora.svg";
function Landingpage() {
  return (
    <>
      <div className="background-color background">
        <div className="h-left">
          <img src={Heroimage} className="Heroimage" />
        </div>
        <div className="main-text">
          <div className="hero-text">
            CATCH MY <br />
            <span className="game"> GAME </span>
          </div>
          <div className="tag-line">
            DON'T MISS OUT ON YOUR FAVOURITE SPORT LIVE!
          </div>

          <div className="all-sponsers">
            <div className="flex-grow"></div>

            <img src={Livepeerlogo} className="Livepeerlogo" />
            <img src={Polygonelogo} className="Polygonelogo" />
            <img src={Zoralogo} className="Zoralogo" />
            <img src={nftportlogo} className="nftstoragelogo" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landingpage;
