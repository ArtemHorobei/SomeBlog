import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_HELLO_WORLD, RECEIVE_HELLO_WORLD } from './actions';

function* helloWorld (action) {
    try {
        yield put ({
            type: RECEIVE_HELLO_WORLD,
            text: 'Hello world from redux saga' });
    } catch (e) {
        yield put ({
            type: RECEIVE_HELLO_WORLD,
            text: 'Hello world from redux saga' });
    }
}

export default function* mySaga () {
    yield takeLatest (REQUEST_HELLO_WORLD, helloWorld)
}
