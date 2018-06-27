import './PostPage.scss';
import React, { Component } from 'react';

class PostPage extends Component {
    componentDidMount() {
        this.parallaxScroll();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
    parallaxScroll = () => {
        window.addEventListener('scroll', this.scrollHandler);
    };
    scrollHandler = () => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const elHeaderImage = document.getElementById('parallax1');
        const elHeaderDescription = document.getElementsByClassName('post-page-header-title-wrap')[0];
        elHeaderImage.setAttribute('style', `background-position: 50% ${(0 - (scrolled * 0.25))}px`);
        elHeaderDescription.setAttribute('style', `opacity: ${scrolled === 0 ? 1 : 1 - scrolled * 0.0025}`);
    };
    render() {
        return (
            <div className="post-page-wrap">
                <div id="parallax1" className="post-page-header-parallax">
                    <div className="post-page-header-title-wrap">
                        <ul>
                            <li className="li-description">The history of Liverpool can be traced back to 1190</li>
                            <li className="li-info">JANUARY 14, 2018 / 3 COMMENTS / BY Vlad Vasilenko</li>
                        </ul>
                    </div>
                </div>
                <div className="post-page-content-wrap">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
                <div style={{ backgroundImage: 'url(https://espanarusa.com/files/autoupload/85/82/91/gbwyvltx383441.jpg)' }} className="post-page-header-parallax"/>
                <div className="post-page-content-wrap">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                </div>
                <div className="post-page-author-wrap">
                    <ul className="post-page-author-ul">
                        <li>
                            <img className="author-avatar" src="https://pbs.twimg.com/media/CNxmAaBUYAAngyq.jpg" alt="avatar"/>
                        </li>
                        <li className="post-page-author-li">
                            <div className="post-page-author-li-post-by">
                                Post by
                            </div>
                            <span className="post-page-author-li-name">Vlad Vasilenko</span>
                        </li>
                        <li>
                            <div className="share">
                                <span>Share</span>
                                <nav>
                                    <a href="#"><i className="fa fa-twitter"/></a>
                                    <a href="#"><i className="fa fa-facebook"/></a>
                                    <a href="#"><i className="fa fa-google"/></a>
                                    <a href="#"><i className="fa fa-github"/></a>
                                </nav>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PostPage;
