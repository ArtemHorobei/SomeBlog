import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_GET_POSTS, REQUEST_CREATE_POST, receiveGetPosts, receiveCreatePost } from '../actions/actions';
import Cookies from 'js-cookie';
import { requestGetPosts, requestCreatePost } from '../api/api';

function* getPostsSaga () {
    try {
        const data = yield call(requestGetPosts);
        if (data && data.headers) {
            Cookies.set('session', data.headers);
            yield put(receiveGetPosts(data.data.posts));
        }
    } catch (e) {
        console.log(e);
    }
}

function* createPostSaga () {
    try {
        const data = yield call(requestCreatePost);
        if (data && data.headers) {
            Cookies.set('session', data.headers);
            yield put(receiveCreatePost(data.data.post));
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* postsSaga () {
    yield takeLatest (REQUEST_GET_POSTS, getPostsSaga);
    yield takeLatest (REQUEST_CREATE_POST, createPostSaga);
}
