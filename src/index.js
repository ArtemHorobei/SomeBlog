import App from './components/App/App';
import Cookies from 'js-cookie';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { requestValidateToken } from './actions/actions';

store.dispatch(requestValidateToken(Cookies.get('session')));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
