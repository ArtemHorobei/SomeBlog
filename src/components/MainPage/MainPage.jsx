import './MainPage.scss';
import BigArticle from '../Articles/BigArticle';
import MediumArticle from '../Articles/MediumArticle';
import React from 'react';
import SmallArticle from '../Articles/SmallArticle';

const MainPage = () => {
    return (
        <div className="main-page-wrap">
            <div className="container">
                <BigArticle backgroundImage="url(https://espanarusa.com/files/autoupload/85/82/91/gbwyvltx383441.jpg)" />
                <div className="small-column">
                    <SmallArticle backgroundImage='url(https://static.pexels.com/photos/449462/pexels-photo-449462.jpeg)'/>
                    <SmallArticle backgroundImage='url(https://imgclf.112.ua/original/2015/03/04/136224.jpg)'/>
                </div>
            </div>
            <div className="container">
                <div className="small-column">
                    <SmallArticle backgroundImage='url(https://www.gastronom.ru/binfiles/images/20151218/b9579cc2.jpg)'/>
                    <SmallArticle backgroundImage='url(http://tvk6.ru/upload/iblock/263/263f28241026c2caedfa98b78debe199.jpg)'/>
                </div>
                <BigArticle backgroundImage="url(http://znay-pravo.ru/wp-content/uploads/2016/12/kak-poluchit-litsenziyu-na-travmat.jpg)" />
            </div>
            <div className="container">
                <BigArticle backgroundImage="url(https://lifehacker.ru/special/meat/images/b64968bd-a3c5-4abb-89bc-3119a98fcdde__shutterstock_307201295.jpg)" />
                <MediumArticle backgroundImage="url(https://wallpaperscraft.ru/image/specnaz_28_nedel_spustya_oruzhie_m4_avtomat_28_weeks_later_3825_640x960.jpg)" />
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
