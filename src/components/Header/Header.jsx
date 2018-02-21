import './Header.scss';
import React, { Component } from 'react';
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
        return (
            <div className="header-wrap">
                <div className="header-author">
                    <div>
                        <Link to="/">
                            <img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/>
                        </Link>
                    </div>
                    <div><Link style={{ textDecoration: 'none', color: 'black' }} to="/"><span>Art Midborn</span></Link></div>
                </div>
                <div className="header-icons-wrap">
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
            </div>
        );
    }
}

export default Header;
