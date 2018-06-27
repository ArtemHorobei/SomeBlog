import axios from 'axios';
import Cookies from 'js-cookie';

export const requestSignIn = () => {
    return axios.post('http://localhost:3002/auth/sign_in', { email: 'a@a.ru', password: 'aa123456' }).then((res) => {
        return res;
    });
};

export const requestValidateToken = () => {
    const cookieHeaders = Cookies.get('session');
    return axios.get('http://localhost:3002/auth/validate_token', { headers: JSON.parse(cookieHeaders) }).then((res) => {
        return res;
    });
};

export const requestGetPosts = () => {
    const cookieHeaders = Cookies.get('session');
    return axios.get('http://localhost:3002/api/v1/posts', { headers: JSON.parse(cookieHeaders) }).then((res) => {
        return res;
    });
};

export const requestCreatePost = () => {
    const cookieHeaders = Cookies.get('session');
    return axios.post('http://localhost:3002/api/v1/posts', { title: 'Title', content: 'Content' }, { headers: JSON.parse(cookieHeaders) }).then((res) => {
        return res;
    });
};
