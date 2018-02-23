import { connect } from 'react-redux';
import Header from './Header.jsx';
import React from 'react';
import { requestOAuthSignIn } from '../../actions/actions';

const HeaderContainer = (props) => <Header {...props} />;

function mapStateToProps (state) {
    return {
        isSIgnIn: state.userInfo ? state.userInfo.signIn : null,
        userInfo: state.userInfo ? state.userInfo.user : null
    };
}

function mapDispatchToProps (dispatch) {
    return {
        requestOAuthSignIn: (data) => dispatch(requestOAuthSignIn(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
