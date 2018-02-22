import './Header.scss';
import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isSearch: false,
            isMenu: false
        };
    }
    render () {
        const headerInfo = _.isEmpty(this.props.userInfo)
            ? <div className="header-author">
                <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                        <span>Blog</span>
                    </Link>
                </div>
            </div>
            : <div className="header-author">
                <div>
                    <Link to="/">
                        <img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/>
                    </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                        <span>{ this.props.userInfo.first_name } </span>
                        <span>{ this.props.userInfo.last_name }</span>
                    </Link>
                </div>
            </div>;
        const headerIcons = _.isEmpty(this.props.userInfo)
            ? <div className="header-icons-wrap">
                <div className="header-icons-left-area">
                    <i onClick={this.props.requestOAuthSignIn.bind(this, 'facebook')} className="header-icon fa fa-facebook-official"/>
                    <i className="header-icon fa fa-twitter"/>
                    <i className="header-icon fa fa-instagram"/>
                    <i className="header-icon fa fa-telegram"/>
                </div>
                <div className="header-icons-right-area">
                    <i className="header-icon additional-icons fa fa-bars"/>
                    <i className="header-icon additional-icons fa fa-search"/>
                </div>
            </div>
            : <div className="header-icons-wrap">
                <div className="header-icons-right-area">
                    <i className="header-icon additional-icons fa fa-bars"/>
                    <i className="header-icon additional-icons fa fa-search"/>
                </div>
            </div>;
        return (
            <div className="header-wrap">
                {headerInfo}
                {headerIcons}
            </div>
        );
    }
}

export default Header;
