import { RECEIVE_API_DATA } from '../actions/actions';

const initialState = {user: {}};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            return {user: data};
        default:
            return state
    }
};
