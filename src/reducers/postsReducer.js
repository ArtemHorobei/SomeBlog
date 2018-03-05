import { RECEIVE_GET_POSTS, RECEIVE_CREATE_POST } from '../actions/actions';

const initialState = {posts: {}};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_GET_POSTS:
            return data;
        case RECEIVE_CREATE_POST:
            return {...state, posts: {data, ...state.posts}};
        default:
            return state
    }
};
