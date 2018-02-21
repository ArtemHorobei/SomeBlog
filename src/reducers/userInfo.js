import { RECEIVE_OAUTH_SIGN_UP } from '../actions/actions';

const initialState = {};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_OAUTH_SIGN_UP:
            return data;
        default:
            return state
    }
};
