import axios from 'axios';

export const fetchSignUp = () => {
    return axios.post('http://localhost:3002/auth/sign_in', {email: 'a@a.ru', password: 'aa123456'}).then((res) => {
        return res.data.data;
    });
};
