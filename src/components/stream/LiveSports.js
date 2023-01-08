import React from "react";
import "../stream/LiveSports.scss";
import Livepeer from "livepeer-nodejs";
import ReactPlayer from "react-player";
import { useReactMediaRecorder } from "react-media-recorder";
import { useState, useEffect } from "react";
import LoadingAnimation from "../users/generalblocks/LoadingAnimation";

function LiveSports() {
  // const [videoSrc, setVideoSrc] = useState("");
  // const [isLoading, setLoading] = React.useState(true);
  // const [stream, setStreams] = useState("");

  // useReactMediaRecorder({ video: true });
  // const livepeerObject = new Livepeer("77aa98f3-4889-4091-94f7-22eee8b5a79f");

  // const getStreams = async () => {
  //   const streams = await livepeerObject.Stream.getAll(1, true, true);
  //   setStreams(streams);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getStreams();
  //   // setLoading(false);
  // }, 5000);

  // if (isLoading) {
  //   return <LoadingAnimation />;
  // }

  // if (stream) {
  return (
    <>
      <div className="livestream-main-container">
        <div className="livestream-main-container-inner-div">
          <div className="livestream-header">
            <h1 className="livestream-t-header">LiveStream</h1>
          </div>
          {/* <p className="livestream-p-header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              temporibus sed voluptatem dicta quas vitae quibusdam omnis
              similique optio sint esse quisquam
            </p> */}
          {/* {stream.map((stream) => { */}
          <div className="livestream-main-content">
            <div className="livestream-content">
              <div className="livestream-img">
                <a>
                  {/* <img src="https://picsum.photos/200" alt="" /> */}
                  <ReactPlayer
                    url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    crossOrigin="anonymous"
                    controls={true}
                  />
                </a>
                <div class="btn btn_live">
                  Live<span class="live-icon"></span>
                </div>
              </div>

              <div className="livestream-title">
                <h4>The news you asking thought, king’s</h4>
              </div>
              <div className="livestream-user">
                <div className="livestream-img-name">
                  <span>user name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  //   } else {
  //     console.log("no");
  //   }
  // }
}
export default LiveSports;
