import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_OAUTH_SIGN_IN, receiveOAuthSignIn } from '../actions/actions';
import { requestSignIn } from '../api/api';

function* oAuthSignIn () {
    try {
        const data = yield call(requestSignIn);
        yield put(receiveOAuthSignIn(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* authSaga () {
    yield takeLatest (REQUEST_OAUTH_SIGN_IN, oAuthSignIn)
}
