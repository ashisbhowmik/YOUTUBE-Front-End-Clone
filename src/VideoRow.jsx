import React from "react";
import "./videoRow.css";

const VideoRow = ({
  image,
  title,
  subs,
  views,
  timestamp,
  channel,
  description,
}) => {
  return (
    <>
      <div className="videoRow">
        <img src={image} alt="Image not found" />

        <div className="videoRow__text">
          <h3>{title}</h3>
          <p className="videoRow__headline">
            {channel} • {views} • {timestamp}
          </p>
          <p className="videoRow__description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default VideoRow;
