import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import React from 'react';

const MainPageContainer = (props) => <MainPage {...props} />;

function mapStateToProps (state) {
    return {
        data: state.data
    };
}

export default connect(mapStateToProps)(MainPageContainer);
