import React from 'react';
import { connect } from 'react-redux';
import CreatePost from './CreatePost.jsx';
import { requestCreatePost } from '../../actions/actions';

const CreatePostContainer = props => <CreatePost {...props} />;

function mapDispatchToProps(dispatch) {
    return {
        requestCreatePost: () => dispatch(requestCreatePost()),
    };
}

export default connect(null, mapDispatchToProps)(CreatePostContainer);
