import * as types from '../constants/actionTypes';

export const counterIncrement = () => ({
    type: types.COUNTER_INCREMENT
});

export const counterDecrement = () => ({
    type: types.COUNTER_DECREMENT
});

export const counterIncrementAsync = () => ({
    type: types.COUNTER_INCREMENT_ASYNC
});