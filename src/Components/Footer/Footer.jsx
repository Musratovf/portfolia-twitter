import React from 'react';
import "./Footer.scss"
import poisk from "../../Assets/Img/poisk.png"

const Footer = () => {
    return (
        <div className='footer'>
            <input className='footer-input' type="text" placeholder='Search Twitter' />
        </div>
    );
};

export default Footer;