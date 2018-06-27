import {
    call, put, takeLatest,
} from 'redux-saga/effects';
import {
    REQUEST_GET_POSTS, REQUEST_CREATE_POST, receiveGetPosts, receiveCreatePost, receiveUpdateHeaders,
} from '../actions/actions';
import { requestGetPosts, requestCreatePost } from '../api/api';

function* getPostsSaga() {
    try {
        const data = yield call(requestGetPosts);
        if (data && data.headers) {
            yield put(receiveGetPosts(data.data.data.posts));
            yield put(receiveUpdateHeaders(data.headers));
        }
    } catch (e) {
        console.log(e);
    }
}

function* createPostSaga() {
    try {
        const data = yield call(requestCreatePost);
        if (data && data.headers) {
            yield put(receiveCreatePost(data.data.post));
            yield put(receiveUpdateHeaders(data.headers));
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* postsSaga() {
    yield takeLatest(REQUEST_GET_POSTS, getPostsSaga);
    yield takeLatest(REQUEST_CREATE_POST, createPostSaga);
}
