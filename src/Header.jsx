import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import logo from "./you.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const searchBox = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <MenuIcon className="menu" />
          <Link to="/">
            <img className="logo" src={logo} alt="image not found" />
          </Link>
        </div>
        <div className="header__input">
          <input
            type="text"
            placeholder="Search Here"
            value={search}
            onChange={searchBox}
          />
          <Link to={`/search/${search}`}>
            <SearchIcon className="header__searchButton" />
          </Link>
        </div>
        <div className="header__right">
          <VideoCallSharpIcon className="header__right" />
          <AppsSharpIcon className="header__right" />
          <NotificationsNoneSharpIcon className="header__right" />
          <img
            className="profile"
            src="https://yt3.ggpht.com/yti/ANoDKi4hOv4EbG2PN6kc69NyhXsEudBcRnmWzkoGHxzY=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="image not found"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
