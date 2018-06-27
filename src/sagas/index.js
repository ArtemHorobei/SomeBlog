import { all } from 'redux-saga/effects';
import authSaga from './oAuthSaga';
import postsSaga from './postsSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        postsSaga(),
    ]);
}
