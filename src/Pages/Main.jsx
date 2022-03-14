import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import star from "../Assets/Img/star.png"
import Bobur from "../Assets/Img/bobur.png"
import img from "../Assets/Img/img.png"
import gif from "../Assets/Img/gif.png"
import stats from "../Assets/Img/stats.png"
import smaylik from "../Assets/Img/smaylik.png"
import date from "../Assets/Img/date.png"
import devachki from "../Assets/Img/devachki.png"
import "./Main.scss"

const Main = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <div className="container-center">
                <div className="center-header">
                <h2 className='heading'>Home</h2>
                <img src={star} width={24} height={24} alt="star" />
                </div>
                <div className="heading-whats">
                <img src={Bobur} alt="bobur" />
                <p>What’s happening</p>
                </div>
                <ul className='icons-list'>
                    <li>
                        <a href="#link">
                            <img src={img} alt="img" />
                        </a>
                    </li>
                    <li>
                        <a href="#link">
                            <img src={gif} alt="gif" />
                        </a>
                    </li>
                    <li>
                        <a href="#link">
                            <img src={stats} alt="stats" />
                        </a>
                    </li>
                    <li>
                        <a href="#link">
                            <img src={smaylik} alt="smaylik" />
                        </a>
                    </li>
                    <li>
                        <a href="#link">
                            <img src={date} alt="date" />
                        </a>
                    </li>
                </ul>
                <div className="btns">
                <button className='icons-btn'>Tweet</button>
                </div>
                <div>
                    <img src={devachki} alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};


export default Main;