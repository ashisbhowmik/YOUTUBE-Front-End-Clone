import React from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./channelRow.css";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <>
      <div className="channelRow">
        <Avatar
          className="channelRow__logo"
          src={image}
          alt="image not found"
        />

        <div className="channelRow__text">
          <h4>
            {channel} {verified && <VerifiedUserIcon />}
          </h4>
          <p>
            {subs} subscribers • {noOfVideos} videos
          </p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ChannelRow;
