import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import RestoreIcon from "@material-ui/icons/Restore";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={ExploreIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={RestoreIcon} title="History" />
        <SidebarRow Icon={PlayCircleOutlineIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
        <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
        <hr />

        <h4 className="subscription">Subscriptions</h4>
        <SidebarRow Icon={AccountCircleIcon} title="CodeWithHarry" />
        <SidebarRow Icon={AccountCircleIcon} title="Clever Programmer" />
        <SidebarRow Icon={AccountCircleIcon} title="Easy Tutorial" />
        <SidebarRow Icon={AccountCircleIcon} title="Carry Minati" />
      </div>
    </>
  );
};

export default Sidebar;
