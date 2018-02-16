import './MainPage.scss';
import BigArticle from '../Articles/BigArticle';
import MediumArticle from '../Articles/MediumArticle';
import React from 'react';
import SmallArticle from '../Articles/SmallArticle';

const MainPage = () => {
    return (
        <div className="main-page-wrap">
            <div className="container">
                <BigArticle backgroundImage="url(https://static.pexels.com/photos/534164/pexels-photo-534164.jpeg)" />
                <div className="small-column">
                    <SmallArticle backgroundImage='url(https://static.pexels.com/photos/449462/pexels-photo-449462.jpeg)'/>
                    <SmallArticle backgroundImage='url(https://static.pexels.com/photos/442645/pexels-photo-442645.jpeg)'/>
                </div>
            </div>
            <div className="container">
                <div className="small-column">
                    <SmallArticle backgroundImage='url(https://static.pexels.com/photos/1966/field-summer-agriculture-harvest.jpg)'/>
                    <SmallArticle backgroundImage='url(https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1451703942000/photosp/b9025f6b-2a51-4795-b173-0167f733f2ea/stock-photo-pattern-rainbow-abstract-curtain-textile-texture-wallpaper-color-fabric-b9025f6b-2a51-4795-b173-0167f733f2ea.jpg)'/>
                </div>
                <BigArticle backgroundImage="url(https://www.wallpaperup.com/uploads/wallpapers/2013/12/15/196200/f2c43e4304abcbd78e81c243a33bfb54-1000.jpg)" />
            </div>
            <div className="container">
                <BigArticle backgroundImage="url(http://icloudpicture.com/wp-content/uploads/2017/08/Beautiful-Nature-Wallpapers.jpg)" />
                <MediumArticle backgroundImage="url(http://ua.today/images/news/2016/%D0%98%D1%8E%D0%BB%D1%8C/03/111.jpg)" />
            </div>
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
                    <h2 className="title-text">Recent Comments</h2>
                    <ul className="list-ul">
                        <li className="list-li">Peter on Summer</li>
                        <li className="list-li">Paul on Autumn</li>
                        <li className="list-li">Alex on Winter</li>
                        <li className="list-li">Maria on Spring</li>
                    </ul>
                </div>
                <div className="info-footer-title">
                    <h2 className="title-text">Archives</h2>
                    <ul className="list-ul">
                        <li className="list-li">May, 2017</li>
                        <li className="list-li">June, 2017</li>
                        <li className="list-li">July, 2017</li>
                        <li className="list-li">August, 2017</li>
                    </ul>
                </div>
                <div className="info-footer-title">
                    <h2 className="title-text">About me</h2>
                    <img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/>
                    <div><span className="about-me-text">My name is Artem and I'm a serial blogger. I love life and more than anything in the whole wide world, I love taking photographs. Oh and did I mention, that I quite like blogging?</span></div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
