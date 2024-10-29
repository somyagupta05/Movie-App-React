import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./ucard.css";
export const Ucard = ({ item: { id, cover, name, time, videoUrl } }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span>
          <br />
          <button className="primary-btn" onClick={handlePlayClick}>
            <i className="fa fa-play"></i>PLAY NOW
          </button>
        </div>

        {showVideo && (
          <div className="video-overlay">
            <ReactPlayer
              url={videoUrl}
              controls
              playing
              width="100%"
              height="100%"
            />
          </div>
        )}
      </div>
    </>
  );
};
