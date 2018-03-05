import { combineReducers } from 'redux';
import userInfo from './userReducer';
import headers from './headersReducer';
import posts from './postsReducer';

export default combineReducers({
    userInfo,
    headers,
    posts
});
