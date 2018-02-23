import axios from 'axios';
import Cookies from 'js-cookie';

export const requestSignIn = () => {
    return axios.post('http://localhost:3002/auth/sign_in', {email: 'a@a.ru', password: 'aa123456'}).then((res) => {
        return res;
    });
};

export const requestValidateToken = () => {
    const data = Cookies.get('session');
    return axios.get('http://localhost:3002/auth/validate_token', { headers: JSON.parse(data) }).then((res) => {
        return res;
    });
};
