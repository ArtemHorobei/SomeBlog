import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import authSaga from './sagas/oAuthSaga';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export default createStore( reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authSaga);
