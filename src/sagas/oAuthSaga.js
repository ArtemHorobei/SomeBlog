import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_OAUTH_SIGN_IN, REQUEST_VALIDATE_TOKEN, receiveOAuthSignIn, receiveUpdateHeaders } from '../actions/actions';
import Cookies from 'js-cookie';
import { requestSignIn, requestValidateToken } from '../api/api';

function* oAuthSignIn () {
    try {
        const data = yield call(requestSignIn);
        if (data && data.headers) {
            Cookies.set('session', data.headers);
            yield put(receiveOAuthSignIn(data.data.data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* validateToken () {
    try {
        const data = yield call(requestValidateToken);
        if (data && data.headers) {
            Cookies.set('session', data.headers);
            yield put(receiveOAuthSignIn(data.data.data));
            yield put(receiveUpdateHeaders(data.headers));
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* authSaga () {
    yield takeLatest (REQUEST_OAUTH_SIGN_IN, oAuthSignIn);
    yield takeLatest (REQUEST_VALIDATE_TOKEN, validateToken);
}
