import { RECEIVE_VALIDATE_TOKEN } from '../actions/actions';

const initialState = {};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_VALIDATE_TOKEN:
            return data;
        default:
            return state
    }
};
