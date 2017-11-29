import reducer from '../reducers/counterReducer';
import * as types from '../constants/actionTypes';

describe('counter reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(0);
    });

    it('should handle COUNTER_INCREMENT', () => {
        expect(reducer([], {
            type: types.COUNTER_INCREMENT
        })).toEqual("1");

        expect(reducer(1, {
            type: types.COUNTER_INCREMENT
        })).toEqual(2)
    });

    it('should handle COUNTER_DECREMENT', () => {
        expect(reducer(1, {
            type: types.COUNTER_DECREMENT
        })).toEqual(0);

        expect(reducer(0, {
            type: types.COUNTER_DECREMENT
        })).toEqual(-1);
    })
});