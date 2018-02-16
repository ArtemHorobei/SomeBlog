import './SmallArticle.scss';
import React, { Component } from 'react';
import PreviewCard from '../../PreviewCard';
import PropTypes from 'prop-types';

const propTypes = {
    backgroundImage: PropTypes.string.isRequired
};

class SmallArticle extends Component {
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
            <div className="article-preview" onMouseEnter={this.showPreviewInfoCard} onMouseLeave={this.showPreviewInfoCard} style={{ backgroundImage: this.props.backgroundImage }}>
                {previewCard}
            </div>
        )
    }
}

SmallArticle.propTypes = propTypes;

export default SmallArticle;
