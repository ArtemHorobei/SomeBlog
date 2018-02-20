import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import React from 'react';
import { requestHelloWorld } from '../../actions';

const MainPageContainer = (props) => <MainPage {...props} />;

function mapStateToProps (state) {
    return {
        helloWorld: state.helloWorld
    };
}
function mapDispatchToProps (dispatch) {
    return {
        requestHelloWorld: () => dispatch(requestHelloWorld())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
