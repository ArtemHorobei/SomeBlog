import { RECEIVE_OAUTH_SIGN_IN } from '../actions/actions';

const initialState = { user: {}, signIn: false };

export default (state = initialState, { type, data }) => {
    switch (type) {
    case RECEIVE_OAUTH_SIGN_IN:
        return { user: data, signIn: true };
    default:
        return state;
    }
};
