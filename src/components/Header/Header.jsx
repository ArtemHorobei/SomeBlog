import './Header.scss';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    isSIgnIn: PropTypes.bool,
    userInfo: PropTypes.object,
    requestOAuthSignIn: PropTypes.func.isRequired,
};

const Header = ({ isSIgnIn, userInfo, requestOAuthSignIn }) => {
    const headerInfo = isSIgnIn
        ? (
            <div className="header-author">
                <div>
                    <Link to="/">
                        <img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/>
                    </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                        <span>{ userInfo.first_name } </span>
                        <span>{ userInfo.last_name }</span>
                    </Link>
                </div>
            </div>
        )
        : (
            <div className="header-author">
                <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                        <span>Blog</span>
                    </Link>
                </div>
            </div>
        );
    const headerIcons = _.isEmpty(userInfo)
        ? (
            <div className="header-icons-wrap">
                <div className="header-icons-left-area">
                    <i onClick={requestOAuthSignIn.bind(this, 'facebook')} className="header-icon fa fa-facebook-official"/>
                    <i className="header-icon fa fa-twitter"/>
                    <i className="header-icon fa fa-instagram"/>
                    <i className="header-icon fa fa-telegram"/>
                </div>
                <div className="header-icons-right-area">
                    <i className="header-icon additional-icons fa fa-bars"/>
                    <i className="header-icon additional-icons fa fa-search"/>
                </div>
            </div>
        )
        : (
            <div className="header-icons-wrap">
                <div className="header-icons-right-area">
                    <i className="header-icon additional-icons fa fa-bars"/>
                    <i className="header-icon additional-icons fa fa-search"/>
                </div>
            </div>
        );
    return (
        <div className="header-wrap">
            {headerInfo}
            {headerIcons}
        </div>
    );
};

Header.propTypes = propTypes;

export default Header;
