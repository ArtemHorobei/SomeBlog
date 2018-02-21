import { RECEIVE_OAUTH_SIGN_IN } from '../actions/actions';

const initialState = {};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_OAUTH_SIGN_IN:
            return data;
        default:
            return state
    }
};
