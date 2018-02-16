import './Footer.scss';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div>Public live blog by ArtMidborn, 2018</div>
            <div className="footer-icons-wrap">
                <i className="footer-icon fa fa-facebook-official"/>
                <i className="footer-icon fa fa-twitter"/>
                <i className="footer-icon fa fa-instagram"/>
                <i className="footer-icon fa fa-telegram"/>
            </div>
        </div>
    );
};

export default Footer;
