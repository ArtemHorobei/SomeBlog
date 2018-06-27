import './BigArticle.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../../PreviewCard';

const propTypes = {
    backgroundImage: PropTypes.string.isRequired,
};

class BigArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { isHover: false };
        this.showPreviewInfoCard = this.showPreviewInfoCard.bind(this);
    }
    showPreviewInfoCard() {
        this.setState({ isHover: !this.state.isHover });
    }
    render() {
        const previewCard = this.state.isHover ? <PreviewCard/> : null;
        const { backgroundImage } = this.props;
        return (
            <div className="big-column">
                <div className="article-preview" onMouseEnter={this.showPreviewInfoCard} onMouseLeave={this.showPreviewInfoCard} style={{ backgroundImage }}>
                    {previewCard}
                </div>
            </div>
        );
    }
}

BigArticle.propTypes = propTypes;

export default BigArticle;
