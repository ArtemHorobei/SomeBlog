import { combineReducers } from 'redux';
import userInfo from './userInfo';
import headers from './headers';

export default combineReducers({
    userInfo,
    headers
});
