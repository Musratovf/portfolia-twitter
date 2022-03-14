import React from "react";
import "./left.css"
import logoTwitter from "../../Assets/Img/logo-twitter.svg"
import Home from "../../Assets/Img/home.png"
import Explore from "../../Assets/Img/explore.png"
import Notifications from "../../Assets/Img/notifications.png"
import messages from "../../Assets/Img/messages.png"
import bookmarks from "../../Assets/Img/bookmarks.png"
import Lists from "../../Assets/Img/lists.png"
import Profile from "../../Assets/Img/profile.png"

const Container = () => {
    return (
        <div className="left">
            <img src={logoTwitter} alt="twitter-logo" />
            <ul className="left__list">
                <li className="left__list-item">
                    <a href="#link"> <img src={Home} alt="home"/><span>Home</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Explore} alt="home"/><span>Explore</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Notifications} alt="home"/><span>Notifications</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={messages} alt="home"/><span>Messages</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={bookmarks} alt="home"/><span>Bookmarks</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Lists} alt="home"/><span>List</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Profile} alt="home"/><span>Profile</span></a>
                </li>
                <li className="left__list-item">
                    <button className="btn-tweet">Tweet</button>
                </li>
            </ul>
        </div>
    );
};

export default Container;