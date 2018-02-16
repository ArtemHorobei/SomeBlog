import './Header.scss';
import React, { Component } from 'react';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isSearch: false,
            isMenu: false
        };
    }
    render () {
        return (
            <div className="header-wrap">
                <div className="header-author">
                    <div><img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/></div>
                    <div><span>Art Midborn</span></div>
                </div>
                <div className="header-icons-wrap">
                    <div className="header-icons-left-area">
                        <i className="header-icon fa fa-facebook-official"/>
                        <i className="header-icon fa fa-twitter"/>
                        <i className="header-icon fa fa-instagram"/>
                        <i className="header-icon fa fa-telegram"/>
                    </div>
                    <div className="header-icons-right-area">
                        <i className="header-icon additional-icons fa fa-bars"/>
                        <i className="header-icon additional-icons fa fa-search"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
