import './PreviewCard.scss';
import React, { Component } from 'react';

class PreviewCard extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        this.wrap.classList += ' bounceInUp animated';
    }
    render () {
        return (
            <div ref={(div) => { this.wrap = div }} className="preview-card-wrap">
                <ul className="preview-card-item">
                    <li className="preview-card-text-date">march 1, 1995</li>
                    <li className="preview-card-text-description">The history of Liverpool can be traced back to 1190</li>
                    <li className="preview-card-button-more">
                        <a>
                            <span className="text">More...</span>
                            <span className="line -right"/>
                            <span className="line -top"/>
                            <span className="line -left"/>
                            <span className="line -bottom"/>
                        </a>
                    </li>
                </ul>
                <div className="preview-card-footer-wrap">
                    <div className="preview-card-footer-icons-wrap">
                        <span>118 </span><i className="fa fa-thumbs-up"/>
                        <span>57 </span><i className="fa fa-comments"/>
                    </div>
                    <div className="preview-card-footer-title-album-wrap">
                        <span>Match of my life</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewCard;
