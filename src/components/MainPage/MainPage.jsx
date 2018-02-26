import './MainPage.scss';
import BigArticle from '../Articles/BigArticle';
import CreatePost from '../CreatePost';
import MediumArticle from '../Articles/MediumArticle';
import React from 'react';
import SmallArticle from '../Articles/SmallArticle';

class MainPage extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="main-page-wrap">
                <CreatePost/>
                <div className="wrap-container">
                    <BigArticle backgroundImage="url(https://espanarusa.com/files/autoupload/85/82/91/gbwyvltx383441.jpg)" />
                    <div className="small-column">
                        <SmallArticle backgroundImage='url(https://static.pexels.com/photos/449462/pexels-photo-449462.jpeg)'/>
                        <SmallArticle backgroundImage='url(https://imgclf.112.ua/original/2015/03/04/136224.jpg)'/>
                    </div>
                </div>
                <div className="wrap-container">
                    <div className="small-column">
                        <SmallArticle backgroundImage='url(https://www.gastronom.ru/binfiles/images/20151218/b9579cc2.jpg)'/>
                        <SmallArticle backgroundImage='url(http://tvk6.ru/upload/iblock/263/263f28241026c2caedfa98b78debe199.jpg)'/>
                    </div>
                    <BigArticle backgroundImage="url(http://znay-pravo.ru/wp-content/uploads/2016/12/kak-poluchit-litsenziyu-na-travmat.jpg)" />
                </div>
                <div className="wrap-container">
                    <BigArticle backgroundImage="url(https://lifehacker.ru/special/meat/images/b64968bd-a3c5-4abb-89bc-3119a98fcdde__shutterstock_307201295.jpg)" />
                    <MediumArticle backgroundImage="url(https://wallpaperscraft.ru/image/specnaz_28_nedel_spustya_oruzhie_m4_avtomat_28_weeks_later_3825_640x960.jpg)" />
                </div>
            </div>
        );
    }
}

export default MainPage;
