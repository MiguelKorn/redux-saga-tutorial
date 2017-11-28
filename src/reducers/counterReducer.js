import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.counter, action) {
    switch (action.type) {
        case types.COUNTER_INCREMENT:
            return state + 1;
        case types.COUNTER_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}