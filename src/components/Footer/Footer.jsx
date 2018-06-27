import './Footer.scss';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="info-footer-wrap">
                <div className="info-footer-title">
                    <h2 className="title-text">Recent Posts</h2>
                    <ul className="list-ul">
                        <li className="list-li">Summer</li>
                        <li className="list-li">Autumn</li>
                        <li className="list-li">Winter</li>
                        <li className="list-li">Spring</li>
                    </ul>
                </div>
                <div className="info-footer-title">
                    <h2 className="title-text">Recent Comments
                    </h2>
                    <ul className="list-ul">
                        <li className="list-li">Peter on Summer</li>
                        <li className="list-li">Paul on Autumn</li>
                        <li className="list-li">Alex on Winter</li>
                        <li className="list-li">Maria on Spring</li>
                    </ul>
                </div>
                <div className="info-footer-title">
                    <h2 className="title-text">Archives
                    </h2>
                    <ul className="list-ul">
                        <li className="list-li">May, 2017</li>
                        <li className="list-li">June, 2017</li>
                        <li className="list-li">July, 2017</li>
                        <li className="list-li">August, 2017</li>
                    </ul>
                </div>
                <div className="info-footer-title">
                    <h2 className="title-text">About me
                    </h2>
                    <img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/>
                    <div>
                        <span className="about-me-text">My name is Artem and I{"'"}m a serial blogger. I love life and more than anything in the whole wide world, I love taking photographs. Oh and did I mention, that I quite like blogging?</span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>Public live blog by ArtMidborn, 2018</div>
                <div className="footer-icons-wrap">
                    <i className="footer-icon fa fa-facebook-official"/>
                    <i className="footer-icon fa fa-twitter"/>
                    <i className="footer-icon fa fa-instagram"/>
                    <i className="footer-icon fa fa-telegram"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
