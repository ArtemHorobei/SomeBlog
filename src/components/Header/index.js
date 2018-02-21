import { connect } from 'react-redux';
import Header from './Header.jsx';
import React from 'react';
import { requestOAuthSignUp } from '../../actions/actions';

const HeaderContainer = (props) => <Header {...props} />;

function mapDispatchToProps (dispatch) {
    return {
        requestOAuthSignUp: (data) => dispatch(requestOAuthSignUp(data))
    };
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
