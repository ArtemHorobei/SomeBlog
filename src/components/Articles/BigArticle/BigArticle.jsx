import './BigArticle.scss';
import PreviewCard from '../../PreviewCard';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
    backgroundImage: PropTypes.string.isRequired
};

class BigArticle extends Component {
    constructor (props) {
        super(props);
        this.state = { isHover: false };
        this.showPreviewInfoCard = this.showPreviewInfoCard.bind(this);
    }
    showPreviewInfoCard () {
        this.setState({ isHover: !this.state.isHover });
    };
    render () {
        const previewCard = this.state.isHover ? <PreviewCard/> : null;
        return (
            <div className="big-column">
                <div className="article-preview" onMouseEnter={this.showPreviewInfoCard} onMouseLeave={this.showPreviewInfoCard} style={{ backgroundImage: this.props.backgroundImage }}>
                    {previewCard}
                </div>
            </div>
        )
    }
}

BigArticle.propTypes = propTypes;

export default BigArticle;
