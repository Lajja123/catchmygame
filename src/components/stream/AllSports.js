import React from "react";
import "../stream/AllSports.scss";
import img from "../stream/man.png";
import { useEffect, useState } from "react";
import LoadingAnimation from "../users/generalblocks/LoadingAnimation";

function AllSports({ account, contract }) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = useState([]);

  const getProfileData = async (e) => {
    let number = await contract.getTotalStreamNumber();
    number = parseInt(number._hex, 16);
    for (let i = 1; i <= number; i++) {
      const stream = await contract.getAllStream(i);
      const title = stream.title;
      const user = stream.stream_creator;
      const creator = await contract.getCreator(account);
      const cover = stream.img_cid;
      const name = creator.creatorName;
      const cid = creator.photo_cid;
      data.push([cover, title, name, cid]);
    }
    setData(data);
    setLoading(false);
    // console.log(data);
  };

  useEffect(() => {
    getProfileData();

    // setLoading(false);
  }, [contract]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  // if (data.length > 0) {
  return (
    <>
      <div className="stream-main-container">
        <div className="stream-main-container-inner-div">
          <div className="stream-header">
            <h1 className="t-header">All Streams</h1>
            {/* <p className="p-header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              temporibus sed voluptatem dicta quas vitae quibusdam omnis
              similique optio sint esse quisquam
            </p> */}
          </div>
          <div className="stream-main-content">
            {data.map((inde) => {
              return (
                <div className="stream-content">
                  <div className="stream-img">
                    <div className="stream-img-main">
                      <a>
                        <img
                          src={inde[0]}
                          alt="uploaded image"
                          crossOrigin="anonymous"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="stream-user">
                    <div className="stream-img-name">
                      <img src={inde[3]} alt="" crossOrigin="anonymous" />
                      <span>{inde[2]}</span>
                    </div>
                  </div>
                  <div className="stream-title">
                    <h4>{inde[1]}</h4>
                  </div>
                  <div className="stream-date">
                    <span>Date:22/8/2022</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="landigpage-footer ">
          Copyright © 2023 CatchMyGame. All Rights Reserved
        </div>
      </div>
    </>
  );
  // } else {
  //   {
  //     console.log("no");
  //   }
  // }
}

export default AllSports;
