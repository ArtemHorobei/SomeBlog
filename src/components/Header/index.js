import { connect } from 'react-redux';
import Header from './Header.jsx';
import React from 'react';
import { requestOAuthSignIn } from '../../actions/actions';

const HeaderContainer = (props) => <Header {...props} />;

function mapStateToProps (state) {
    return {
        userInfo: state.userInfo ? state.userInfo : null
    };
}

function mapDispatchToProps (dispatch) {
    return {
        requestOAuthSignIn: (data) => dispatch(requestOAuthSignIn(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
