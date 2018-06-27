import { connect } from 'react-redux';
import React from 'react';
import MainPage from './MainPage.jsx';
import { requestGetPosts } from '../../actions/actions';

const MainPageContainer = props => <MainPage {...props} />;

function mapStateToProps(state) {
    return {
        data: state.data,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestGetPosts: () => dispatch(requestGetPosts()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
