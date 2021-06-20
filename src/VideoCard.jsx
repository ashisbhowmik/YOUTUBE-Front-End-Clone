import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./videocard.css";

const VideoCard = ({
  image,
  channelImage,
  title,
  channel,
  views,
  timestamp,
}) => {
  return (
    <>
      <div className="videoCard">
        <img src={image} alt="Image not found" className="video__thumbnail" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            alt="image not found"
            src={channelImage}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
