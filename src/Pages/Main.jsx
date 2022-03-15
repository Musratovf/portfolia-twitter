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
import achki from "../Assets/Img/devachki.png"
import foto from "../Assets/Img/foto.png"
import develop from "../Assets/Img/develop.png"
import comments from "../Assets/Img/comments.png"
import refresh from "../Assets/Img/refresh.png"
import refreshed from "../Assets/Img/refreshed.png"
import like from "../Assets/Img/like.png"
import liked from "../Assets/Img/liked.png"
import exportIcon from "../Assets/Img/export.png"
import statik from "../Assets/Img/statistic.png"
import points from "../Assets/Img/points.png"
import shashlik from "../Assets/Img/shashlik.png"
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
                <p className='heading-title'>What’s happening</p>
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
                <div className="heading-whats border">
                    <div className='text-flex'>
                        <img className='position-points' src={points} alt="points" />
                        <img src={foto} width={60} height={60} alt="fotoaparatchi" />
                        <div className="flex-right">
                        <h2 className='heading-designsta'>Designsta</h2>
                        <span className='email-text'>@inner · 25m</span>
                        <p className='center-title'>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                        <ul className='list-item'> 
                            <li>
                                <a href="#link">
                                    <img src={comments} alt="comment" />  10
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={refresh} alt="refresh" /> 1
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={like} alt="like" /> 8
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={exportIcon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={statik} alt="static" />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                       
                <div className="heading-whats border">
                    <div className='text-flex'>
                    <img className='position-points' src={points} alt="points" />
                        <img src={achki}width={60} height={60} alt="achki" />
                        <div className="flex-right">
                        <h2 className='heading-designsta'>Designsta</h2>
                        <span className='email-text'>@inner · 25m</span>
                        <p className='center-title'>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                        <ul className='list-item'> 
                            <li>
                                <a href="#link">
                                    <img src={comments} alt="comment" />  10
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={refreshed} alt="refresh" /><span className='yelow'>1</span>
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={liked} alt="like" /> <span className='red'>8</span>
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={exportIcon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={statik} alt="static" />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="heading-whats">
                    <div className='text-flex'>
                        <img src={develop} width={60} height={60} alt="achki" />
                        <div className="flex-right">
                        <h2 className='heading-designsta'>Designsta</h2>
                        <span className='email-text'>@inner · 25m</span>
                        <p className='center-title'>Обетда.....</p>
                        <p className='center-title'>Кечиринглар</p>
                        <img src={shashlik} alt="shashlik" />
                        <ul className='list-item'> 
                            <li>
                                <a href="#link">
                                    <img src={comments} alt="comment" />  10
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={refresh} alt="refresh" /> 1
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={like} alt="like" /> 8
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={exportIcon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#link">
                                    <img src={statik} alt="static" />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};


export default Main;