import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import React from 'react';
import { requestGetPosts } from '../../actions/actions';

const MainPageContainer = (props) => <MainPage {...props} />;

function mapStateToProps (state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps (dispatch) {
    return {
        requestGetPosts: () => dispatch(requestGetPosts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
