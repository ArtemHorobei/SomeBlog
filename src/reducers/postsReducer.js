import { RECEIVE_GET_POSTS, RECEIVE_CREATE_POST } from '../actions/actions';

const initialState = [];

export default (state = initialState, { type, data }) => {
    switch (type) {
    case RECEIVE_GET_POSTS:
        return data;
    case RECEIVE_CREATE_POST:
        return [data, ...state];
    default:
        return state;
    }
};
