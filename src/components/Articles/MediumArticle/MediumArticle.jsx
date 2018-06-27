import './MediumArticle.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../../PreviewCard';

const propTypes = {
    backgroundImage: PropTypes.string.isRequired,
};

class MediumArticle extends Component {
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
        return (
            <div className="medium-column">
                <div className="article-preview" onMouseEnter={this.showPreviewInfoCard} onMouseLeave={this.showPreviewInfoCard} style={{ backgroundImage: this.props.backgroundImage }}>
                    {previewCard}
                </div>
            </div>
        );
    }
}

MediumArticle.propTypes = propTypes;

export default MediumArticle;
