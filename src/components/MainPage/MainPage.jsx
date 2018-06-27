import './MainPage.scss';
import React from 'react';
import PropTypes from 'prop-types';
import BigArticle from '../Articles/BigArticle';
import CreatePost from '../CreatePost';
import MediumArticle from '../Articles/MediumArticle';
import SmallArticle from '../Articles/SmallArticle';

const propTypes = {
    requestGetPosts: PropTypes.func.isRequired,
};

class MainPage extends React.Component {
    componentWillMount() {
        this.props.requestGetPosts();
    }
    render() {
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
                        <SmallArticle backgroundImage='url(http://ps4n.ru/wp-content/uploads/2016/08/the-division-movie.jpg)'/>
                        <SmallArticle backgroundImage='url(http://tvk6.ru/upload/iblock/263/263f28241026c2caedfa98b78debe199.jpg)'/>
                    </div>
                    <BigArticle backgroundImage="url(http://znay-pravo.ru/wp-content/uploads/2016/12/kak-poluchit-litsenziyu-na-travmat.jpg)" />
                </div>
                <div className="wrap-container">
                    <BigArticle backgroundImage="url(https://lifehacker.ru/special/meat/images/b64968bd-a3c5-4abb-89bc-3119a98fcdde__shutterstock_307201295.jpg)" />
                    <MediumArticle backgroundImage="url(https://images.britcdn.com/wp-content/uploads/2018/01/Gal-Gadot-PGA-2018.jpg?fit=max&w=1440)" />
                </div>
            </div>
        );
    }
}

MainPage.propTypes = propTypes;

export default MainPage;
