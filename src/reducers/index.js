import { combineReducers } from 'redux';
import headers from './headersReducer';
import posts from './postsReducer';
import userInfo from './userReducer';

export default combineReducers({
    userInfo,
    headers,
    posts,
});
