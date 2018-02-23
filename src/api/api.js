import axios from 'axios';

export const requestSignIn = () => {
    return axios.post('http://localhost:3002/auth/sign_in', {email: 'a@a.ru', password: 'aa123456'}).then((res) => {
        return res;
    });
};

export const requestValidateToken = (data) => {
    return axios.get('http://localhost:3002/auth/validate_token', data.data).then((res) => {
        return res;
    });
};
