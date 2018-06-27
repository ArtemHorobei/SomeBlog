import { RECEIVE_UPDATE_HEADERS } from '../actions/actions';

const initialState = {};

export default (state = initialState, { type, data }) => {
    switch (type) {
    case RECEIVE_UPDATE_HEADERS:
        return data;
    default:
        return state;
    }
};
