import React from "react";
import logoTwitter from "../../Assets/Img/logo-twitter.svg"
import Home from "../../Assets/Img/home.png"
import Explore from "../../Assets/Img/explore.png"
import Notifications from "../../Assets/Img/notifications.png"
import messages from "../../Assets/Img/messages.png"
import bookmarks from "../../Assets/Img/bookmarks.png"
import Lists from "../../Assets/Img/lists.png"
import Profile from "../../Assets/Img/profile.png"
import More from "../../Assets/Img/more.png"
import Bobur from "../../Assets/Img/bobur.png"
import Points from "../../Assets/Img/points.png"

const Header = () => {
    return (
        <div className="left">
            <div className="container">
            <a href="#link">
                <img src={logoTwitter} width={40} height={33} alt="twitter-logo" />
                </a>
            <ul className="left__list">
                <li className="left__list-item">
                    <a href="#link"> <img src={Home} alt="home"/></a>
                    <a href="#link"><span>Home</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Explore} alt="explore"/></a>
                    <a href="#link"><span>Explore</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Notifications} alt="notifications"/></a>
                    <a href="#link"><span>Notcations</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={messages} alt="messages"/></a>
                    <a href="#link"><span>Messages</span></a>

                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={bookmarks} alt="bookmark"/></a>
                    <a href="#link"><span>Bookmarks</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"><img src={Lists} alt="list"/></a>
                    <a href="#link"><span>Lists</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={Profile} alt="profil"/></a>
                    <a href="#link"><span>Profile</span></a>
                </li>
                <li className="left__list-item">
                    <a href="#link"> <img src={More} alt="more"/></a>
                    <a href="#link"><span>More</span></a>
                </li>
                <li className="left__list-item">
                    <button className="btn-tweet">Tweet</button>
                </li>
            </ul>
            </div>
            <div className="left-sticki">
                <img src={Bobur} alt="bobur" />
                <div className="inner">
                <strong>Bobur</strong>
                <p><a href="mailto:example@gmail.com">@bobur_mavlonov</a></p>
                </div>
                <button className="btn-points"><img src={Points} alt="Points" /></button>
            </div>
        </div>
    );
};

export default Header;